
import AuthButton from '@/components/ui/video-player/auth-placehodler/AuthButton'
import { useAuth } from '@/hooks/useAuth'
import {FC} from 'react' 
import { useRateMovie } from './useRateMovie'
import { Rating } from '@smastrom/react-rating';


export interface IRateMovie {
   id: string,
   slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => { 
    
   const { user} = useAuth()
   const { handleClick, isSended, rating } = useRateMovie(id)

 return ( 
    <div>
       <h2>How do you like movie</h2>
       <p>Ratins improve recomendations</p>
       {user
          ? <>
             {isSended
                ? (<div>Fhanks for rating</div>)
                : (<Rating style={{ maxWidth: 250 }} value={rating} onChange={handleClick}/>)
             }             
          </>
          : <AuthButton slug={slug} />}
    </div> 
 ) 
} 
 export default RateMovie