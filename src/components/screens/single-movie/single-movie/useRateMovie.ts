import { useAuth } from "@/hooks/useAuth"
import { rattingSerive } from "@/services/rateService"
import { toastrError } from "@/utils/toasrt-error"
import { useRouter } from "next/router"
import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import {toastr} from 'react-redux-toastr'


export const useRateMovie = (movieId: string) => {
   
   const [rating, setRating] = useState(0)
   const [isSended, setUsSended] = useState(false)

   const {user} = useAuth()

   const {refetch} = useQuery(['your movie rating', movieId],
   () =>  rattingSerive.getByUserMovie(movieId),
   {
      onSuccess: ({data}) => {
         setRating(data)
      },
      onError: (error) => toastrError(error, 'Error rating'),  
      enabled: !!movieId && !!user
      },
   
 )



 const {mutateAsync } = useMutation('set retting movie', 
   ({value}: {value: number}) => rattingSerive.setRatting(movieId,value),
 {
   onError: (error) =>
     toastrError(error, 'Rate movie'),
 
   onSuccess: ({data: _id}) => {
      toastr.success('Update rate', 'Rate was successful')
      
      setUsSended(true)
      refetch()

      setTimeout(() =>
      { setUsSended(false) }
         , 2400)

 }} 
)

   const handleClick = async (nextValue: number) => {
      setRating(nextValue)
      await mutateAsync({value: nextValue})
   }
   

   return {isSended, handleClick,  rating}

}