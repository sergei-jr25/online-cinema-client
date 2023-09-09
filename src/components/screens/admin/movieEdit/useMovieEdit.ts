import { objectKeys } from "@/utils/object/objectKeys";
import { toastrError } from "@/utils/toasrt-error";
import { useRouter } from "next/router";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { ImovieEdit } from "./movieEdit.interface";
import {toastr} from 'react-redux-toastr'
import { moviesService } from "@/services/moviesSerive";
import { getAdminUrl } from "@/config/url.config";


export const useMovieEdit = (setValue: UseFormSetValue<ImovieEdit>) => {

   const { push, query } = useRouter()
   

   const movieId = String(query.id)

    
   
   const {isLoading } = useQuery(['movie', movieId],
      () => moviesService.getById(movieId),
      {       
         onSuccess: ({ data }) => {
            objectKeys(data).forEach(key => {
               setValue(key, data[key])
            });
         },
         onError: (error) => {
            toastrError(error, 'Get movie')
         },
         enabled: !!movieId
      },
      
      
   )

   const {mutateAsync } = useMutation('movie', (data: ImovieEdit) =>
    moviesService.update(movieId, data),
      {
         onSuccess: () => {
            toastr.success('Update movie', 'Update movie was succees')
            push(getAdminUrl('movies'))
      }, 
         onError: (error) => {
         toastrError(error, 'Update movie')
         }
      }
   )

   const onSubmit: SubmitHandler<ImovieEdit>  = async (data) => {
      return mutateAsync(data)
   }
   
   return {isLoading, onSubmit}
}