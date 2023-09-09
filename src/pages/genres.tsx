import Collection from '@/components/screens/collection/Collection'
import { ICollection } from '@/components/screens/collection/collection.interface'
import Catalog from '@/components/ui/catalog-movies/Catalog'
import { genreService } from '@/services/genreService'
import { moviesService } from '@/services/moviesSerive'
import { IMovies } from '@/shared/types/movies.types'
import { GetStaticProps, NextPage } from 'next'
import {FC} from 'react' 


const GenresPage: NextPage<{collections: ICollection[]}> = ({collections}) => { 
 return ( 
    <div>
       <Collection 
         collections={collections || []} 
         />
   </div> 
 ) 
} 
export default GenresPage
 

export async function getStaticProps() {
   try {
      const { data: collections } = await genreService.getCollection()
      console.log(collections);
      

      return {
         props: {
            collections
         },
         revalidate: 60,
      }

   } catch (error) {
      return {
         props: {
            collections: []      
           }   
       }

   }
}