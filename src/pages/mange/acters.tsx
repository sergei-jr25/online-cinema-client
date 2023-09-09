import ActerList from '@/components/screens/admin/acters/ActerList'
import {FC} from 'react' 
import { NextPageAuth } from '@/shared/types/auth.types'


const ActersPage:NextPageAuth = () => { 
 return ( 
    <div>
      <ActerList/>
   </div> 
 ) 
} 

ActersPage.isOnlyAdmin = true

 export default ActersPage