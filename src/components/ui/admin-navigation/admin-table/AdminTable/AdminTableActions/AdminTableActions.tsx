import MaterialIcon from '@/components/ui/MaterialIcon'
import { useRouter } from 'next/router'
import {FC} from 'react' 
import styles from './AdminTableActions.module.scss'
import cn from 'clsx'

export interface IAdminTableActions {
   editUrl: string,
   removeHandler: () => void
}

const AdminTableActions: FC<IAdminTableActions> = ({ editUrl, removeHandler }) => { 
   
   const {push} = useRouter()

 return ( 
    <div className={styles.actions}>
       <button className={cn(styles.action , styles.editor)} onClick={() => push(editUrl)}>
          <MaterialIcon name='MdEdit'/>
       </button>
       <button  className={styles.action} onClick={removeHandler}>
          <MaterialIcon name='MdClose'/>
       </button>
 </div> 
 ) 
} 
 export default AdminTableActions