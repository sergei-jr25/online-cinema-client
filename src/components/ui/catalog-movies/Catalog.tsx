import { getMoviesUrl } from '@/config/api.config'
import { getMovieUrl } from '@/config/url.config'
import Heading from '@/utils/heading/Heading'
import Meta from '@/utils/meta/Meta'
import {FC} from 'react' 
import GalleryItem from '../gallery/GalleryItem'
import { ICatallog } from './catalog.interface'
import styles from './Catalog.module.scss'


const Catalog: FC<ICatallog> = ({ movies, title, description }) => { 
      
 return ( 
    <Meta title={title}>
       <div className={styles.heading }>
       <Heading title={title} className={ styles.title} />
       {description && <div className={styles.description}>{description}</div>}
       </div>
       <div className={styles.movies}>
          {movies.map(movie =>  <GalleryItem key={movie._id} item={{
             name: movie.title,
             link: getMovieUrl(movie.slug),
             posterPath: movie.bigPoster,
             content: {
                title: movie.title
             }
          }}
             variant="vertical"
          />)    
          }
        </div>
    </Meta> 
 ) 
} 
 export default Catalog