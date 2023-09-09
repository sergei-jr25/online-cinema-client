import { IOption } from "@/components/ui/select/selectr.interface";
import { genreService } from "@/services/genreService";
import { toastrError } from "@/utils/toasrt-error";
import { useQuery } from "react-query";

export const useAdminGenre = () => {
   


const queryData = useQuery(['List of genre'],
    () => genreService.getAll(),
    {
      select: ({ data }) => 
        data.map((genre): IOption => ({
           label: genre.name,
           value: genre._id
        })),
       onError: (error) => {
          toastrError(error, 'Genre list')
       }
   }, 
   )
   return queryData

}