import { userSerive } from '@/services/userService'
import { toastrError } from '@/utils/toasrt-error'
import {FC, useEffect, useState} from 'react' 
import { useMutation } from 'react-query'
import { useFavorites } from '../useFavorites'
import cn from 'clsx'
import styles from './FavoriteButton.module.scss'


const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => { 
   
   const { favoriteMovies, refetch } = useFavorites()
   const [isSmahed, setIsSmahed] = useState(false)

   useEffect(() => {
      if(!favoriteMovies) return
      const isHasMovie = favoriteMovies.some(m => m._id === movieId)
      if(isSmahed !== isHasMovie) setIsSmahed(isHasMovie)
   }, [isSmahed, favoriteMovies, movieId])
   

   const { mutateAsync } = useMutation('update favorite',
      () => userSerive.togleFavorites(movieId),
   {
      onSuccess: () => {
         setIsSmahed(!isSmahed)
         refetch()
   }, 
      onError: (error) => {
      toastrError(error, 'Update favorite list')
      }
   }
)
 


 return ( 
    <button className={cn(styles.button, {
       [styles.animate]: isSmahed
    })}
       onClick={() => mutateAsync()}
    >
       <span className={styles.color}></span>
          </button> 
 ) 
} 
 export default FavoriteButton