import Button from '@/utils/form-elemtns/Button'
import {FC} from 'react' 


const AdminCreateButton:FC<{onClick?: () => void}> = ({onClick}) => { 
 return ( 
   <Button onClick={onClick}>Create</Button> 
 ) 
} 
 export default AdminCreateButton 