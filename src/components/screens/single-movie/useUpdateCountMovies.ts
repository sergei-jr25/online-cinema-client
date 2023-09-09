import { moviesService } from "@/services/moviesSerive"
import { useEffect } from "react"
import { useMutation } from "react-query"

export const useUpdateCountMovies = (slug: string) => {
   const {mutateAsync } = useMutation('update count movie',
      () => moviesService.updateCountOpened(slug),
   )

   useEffect(() => {
      mutateAsync()
   },[])
}