import {FC} from 'react' 
import AuthButton from './AuthButton'


const AuthPlaceholder:FC<{slug: string}> = ({slug}) => { 
 return ( 
    <div>
       <div>You most registartion in order to watching movies</div>   
       <AuthButton slug={slug}/>
   </div> 
 ) 
} 
 export default AuthPlaceholder