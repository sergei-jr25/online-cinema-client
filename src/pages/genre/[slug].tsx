import Catalog from '@/components/ui/catalog-movies/Catalog'
import { genreService } from '@/services/genreService'
import { moviesService } from '@/services/moviesSerive'
import { IGenre, IMovies } from '@/shared/types/movies.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { FC } from 'react' 
import Error404 from '../404'

interface IGenrePage {
   movies: IMovies[],
   genre: IGenre | undefined
}


const GenrePage: NextPage<IGenrePage> = ({movies, genre}) => { 
 return ( 
    <>
       {genre
         ? <Catalog 
          movies={movies || []} 
          title='Fresh movies' 
          description='New movies and series in exccellent quality'
          />
         //  :<Error404/>
          : <h1>Genre page</h1>
         }      
   </> 
 ) 
} 
export default GenrePage


export const getStaticPaths: GetStaticPaths = async () => {
   try {
      const { data: genres } = await genreService.getAll()
      const paths = genres.map(genre => ({
         params: {slug: genre.slug}
      }))

      console.log('pahts', paths);
      
   
      return {paths, fallback: 'blocking'}

   } catch (error) {
      return {
         paths: [],
         fallback: false
     }
       
   }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   
   console.log(params);
   
   try {
      const { data: genre } = await genreService.getBySlug(String(params?.slug))

      
      console.log('gerne', genre);
            
      const { data: movies } = await moviesService.getByGenres([genre._id])

     
          
      return {
         props: {
            movies,
            genre
         },
         revalidate: 60,
      }
      
   } catch (error) {      
      return {
         notFound: true
      }
      
   }
}