import { useAuth } from '@/hooks/useAuth'
import Heading from '@/utils/heading/Heading'
import Meta from '@/utils/meta/Meta'
import SceletonsLoading from '@/utils/skeletonsLoading/SkeletonsLoading'
import {FC} from 'react' 
import Skeleton from 'react-loading-skeleton'
import FavoriteItem from './FavoriteItem'
import { useFavorites } from './useFavorites'


const Favorite: FC = () => { 
   
   const { isLoading, favoriteMovies } = useFavorites()

   const { user } = useAuth()
   
   if(!user) return null 
   
   
 return ( 
    <Meta title='Favorites'> 
       <Heading title='Favorites' />
       <section>
          {isLoading
             ? <SceletonsLoading count={4}/> 
             : (favoriteMovies?.map(movie => <FavoriteItem movie={movie}/>))
            }
       </section>
       
   </Meta> 
 ) 
} 
 export default Favorite