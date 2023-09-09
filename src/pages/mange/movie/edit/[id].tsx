import GenreEdit from '@/components/screens/admin/genreEdit/genreEdit'
import MovieEdit from '@/components/screens/admin/movieEdit/movieEdit'
import { NextPageAuth } from '@/shared/types/auth.types'
import {FC} from 'react' 


const MovieEditPage:NextPageAuth = () => { 
 return ( 
   <div>
     <MovieEdit/>
   </div> 
 ) 
} 

MovieEditPage.isOnlyAdmin = true
 
 export default MovieEditPage