import MaterialIcon from '@/components/ui/MaterialIcon'
import { getActorUrl, getGenreUrl } from '@/config/url.config'
import { useAuth } from '@/hooks/useAuth'
import { IMovies } from '@/shared/types/movies.types'
import Link from 'next/link'
import { FC, Fragment } from 'react' 
import FavoriteButton from '../../favorites/favoriteButton/FavoriteButton'
import ContentList from './content-list/ContentList'
import { IConentList } from './content.interface'
import styles from './Content.module.scss'


const Content: FC<{ movie: IMovies }> = ({ movie }) => { 

   const {user} = useAuth()
  
 return ( 
    <div className={styles.content}>
       <div className={styles.list}>
          <h1>{movie.title}</h1>
          <div className={styles.items}>
             <span>{movie.parameters.country }</span>
             <span>{movie.parameters.year }</span>
             <span>{movie.parameters.duration } min .</span>           
          </div>
          <div className={styles.items}> 

            <ContentList name='Genres:' links={movie.genres.slice(0, 3).map(genre =>
               ({ _id: genre._id, title: genre.name, link: getGenreUrl(genre.slug) })
               )} />
             </div>
           <div className={styles.items}> 
          <ContentList name='Actor:' links={movie.actors.slice(0, 3).map(actor =>
             ({ _id: actor._id, title: actor.name, link: getActorUrl(actor.slug) })
             )} />
          </div>
          <div className={styles.info}>
             {user && <FavoriteButton movieId={movie._id} />}
          <div className={styles.rating}>
             <MaterialIcon name='MdStar' />
             {movie.rating.toFixed(1)}
             </div>           
           
         </div>
       </div>
      
   </div> 
 ) 
} 
 export default Content