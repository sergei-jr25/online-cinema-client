import Catalog from '@/components/ui/catalog-movies/Catalog'
import { moviesService } from '@/services/moviesSerive'
import { IMovies } from '@/shared/types/movies.types'
import { GetStaticProps, NextPage } from 'next'
import {FC} from 'react' 


const FrashPage: NextPage<{movies: IMovies[]}> = ({movies}) => { 
 return ( 
    <div>
       <Catalog 
         movies={movies || []} 
         title='Fresh movies' 
         description='New movies and series in exccellent quality'
         />
   </div> 
 ) 
} 
export default FrashPage
 

export async function getStaticProps() {
   try {
      const { data: movies } = await moviesService.getAll('')

      return {
         props: {
            movies
         },
         revalidate: 60,
      }

   } catch (error) {
      return {
         props: {
            movies: []
         },
       }
   }
}