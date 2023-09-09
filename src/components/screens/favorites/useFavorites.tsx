import { useAuth } from "@/hooks/useAuth"
import { userSerive } from "@/services/userService"
import { useQuery } from "react-query"

export const useFavorites = () => {

   const { user } = useAuth()
   const { isLoading, data: favoriteMovies, refetch } = useQuery(
      'update favorite',
      () => userSerive.getFavorites(), 
      {
         select: ({ data }) => data,
         enabled: !!user
      },
    
   )
   
   return {isLoading, favoriteMovies, refetch}
}