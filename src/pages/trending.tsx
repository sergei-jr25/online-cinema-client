import Catalog from '@/components/ui/catalog-movies/Catalog'
import { moviesService } from '@/services/moviesSerive'
import { IMovies } from '@/shared/types/movies.types'
import { GetStaticProps, NextPage } from 'next'
import {FC} from 'react' 


const TredningPage: NextPage<{movies: IMovies[]}> = ({movies}) => { 
 return ( 
    <div>
       <Catalog 
         movies={movies || []} 
         title='TredningPage movies' 
         description='New tredningPage and series in exccellent quality'
         />
   </div> 
 ) 
} 
export default TredningPage
 

export async function getStaticProps() {
   try {
      const moviesTredning = await moviesService.getPopularaMovies()

      return {
         props: {
            movies: moviesTredning
         },
         revalidate: 60,
      }

   } catch (error) {

      return {
         props: {
            movies: []      
           }   
       }
   }
}