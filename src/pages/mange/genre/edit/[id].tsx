import GenreEdit from '@/components/screens/admin/genreEdit/genreEdit'
import { NextPageAuth } from '@/shared/types/auth.types'
import {FC} from 'react' 


const GenreEditPage:NextPageAuth = () => { 
 return ( 
   <div>
     <GenreEdit/>
   </div> 
 ) 
} 

// GenreEditPage.isOnlyAdmin = true

 export default GenreEditPage