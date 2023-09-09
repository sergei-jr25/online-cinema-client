import MovieList from '@/components/screens/admin/movies/MoviesList'
import {FC} from 'react' 
import { NextPageAuth } from '@/shared/types/auth.types'


const MoviesPage:NextPageAuth = () => { 
 return ( 
    <div>
      <MovieList/> 
   </div> 
 ) 
} 

MoviesPage.isOnlyAdmin = true


 export default MoviesPage