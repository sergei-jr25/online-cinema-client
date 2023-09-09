import Link from 'next/link'
import {FC} from 'react' 


const AuthButton: FC<{slug: string}> = ({slug}) => { 
 return ( 
    <Link href={`auth?redirect${slug}`}>
       Sign in
   </Link> 
 ) 
} 
 export default AuthButton