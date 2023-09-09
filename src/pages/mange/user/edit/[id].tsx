import ActorEdit from '@/components/screens/admin/acterEdit/actorEdit'
import UserEdit from '@/components/screens/admin/userEdit/UserEdit'
import { NextPageAuth } from '@/shared/types/auth.types'


const UserEditPage:NextPageAuth = () => { 
 return ( 
   <div>
     <UserEdit/>
   </div> 
 ) 
} 

UserEditPage.isOnlyAdmin = true

 export default UserEditPage