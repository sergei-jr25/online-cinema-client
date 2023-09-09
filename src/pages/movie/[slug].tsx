import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { getMovieUrl } from '@/config/url.config'
import { moviesService } from '@/services/moviesSerive'
import { IActor, IGenre, IMovies } from '@/shared/types/movies.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Error404 from '../404'

export interface IMoviePage {
   movie: IMovies | undefined,
   similarMovies: IGalleryItem[]
}


const MoviePage: NextPage<IMoviePage> = ({movie, similarMovies}) => { 
 return ( 
    <>
       {movie
          ? 
          <>
         <SingleMovie 
              movie={movie } 
              similarMovies={similarMovies || []}
          />
             </>
          :<Error404/>
         }      
   </> 
 ) 
} 
export default MoviePage


export const getStaticPaths: GetStaticPaths = async () => {
   try {
      const { data: mvoies } = await moviesService.getAll('')
      const paths = mvoies.map(moive => ({
         params: {slug: moive.slug}
      }))
      
      return {paths, fallback: 'blocking'} 

   } catch (error) {
      return {
         paths: [],
         fallback: false
     }
       
   }
}

export const getStaticProps: GetStaticProps = async ({ params}) => {
   

   try {
      const { data: movie } = await moviesService.getBySlug(String(params?.slug)) 
      const { data: responseSimilarMovies } = await moviesService.getByGenres(movie.genres.map(genre => genre._id))
      

      const similarMovies: IGalleryItem[] = responseSimilarMovies
         .slice(0, 7)
         .filter(m => m._id !== movie._id)
         .map(movie => ({
         name: movie.title,
         posterPath: movie.poster,
         link: getMovieUrl(movie.slug),
       }))
     
      return {
         props: {
            movie,
            similarMovies
         },
         revalidate: 60,
      }
      
   } catch (error) {
      return {
         notFound: true
      }
      
   }
}