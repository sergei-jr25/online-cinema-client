import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import { IMoviePage } from '@/pages/movie/[slug]'
import SubHeading from '@/utils/heading/SubHeading'
import Meta from '@/utils/meta/Meta'
import dynamic from 'next/dynamic'
import {FC} from 'react' 
import Content from './content/Content'
import { useUpdateCountMovies } from './useUpdateCountMovies'
import styles from './SingleMovie.module.scss'

const DynamicPlayer = dynamic(() => import('@/components/ui/video-player/VideoPlayer'),
   { ssr: false }
)
const DynamicRate = dynamic(() => import('./single-movie/RateMovie'),
   { ssr: false }
)
 

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => { 

   const movieSlug = String(movie?.slug)
   useUpdateCountMovies(movieSlug)
   
   return ( 
      <>
     { movie &&
      <div className={ styles.container}>
         <Meta title={movie.title} decription={`watch ${movie.title}`} /> 
         <div className={styles.banner}>
            <Banner image={movie.bigPoster} Detail={() => <Content movie={movie} />} />
         </div>
         <DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />

       
            <SubHeading subtitle={movie.title} />
            <Gallery items={similarMovies} />
         
         <div className={styles.rate }>
            <DynamicRate id={movie._id} slug={movie.slug} />
         </div>    
            </div> 
         }
         </>
 ) 
} 
 export default SingleMovie