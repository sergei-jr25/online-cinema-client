import { getMovieUrl } from '@/config/url.config'
import { useAuth } from '@/hooks/useAuth'
import { IMovies } from '@/shared/types/movies.types'
import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react' 
import FavoriteButton from './favoriteButton/FavoriteButton'


const FavoriteItem: FC<{ movie: IMovies }> = ({ movie }) => { 
   
   const {user} = useAuth()

 return ( 
    <div>
       {user &&
          <FavoriteButton movieId={movie._id} />
       }
         
    <Link href={getMovieUrl(movie.slug)}>
          <Image 
            src={movie.bigPoster} 
            alt={movie.title} 
            width={400} 
            height={400} 
            priority 
            draggable 
            />
   </Link> 
 </div> 
 ) 
} 
 export default FavoriteItem