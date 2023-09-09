import SerachField from '@/utils/serachField/SerachField'
import React, {FC, ChangeEvent} from 'react' 
import AdminCreateButton from './adminCreateButton/AdminCreateButton'
import styles from './AdminTable.module.scss'

export interface iAdminTable {
   onClick?: () => void,
   searchTerm: string,
   handleSerach: (event: ChangeEvent<HTMLInputElement>) => void
}



const AdminHeader: FC<iAdminTable> = ({ searchTerm, handleSerach, onClick }) => { 
   
   
 return ( 
    <div className={styles.AdminHeader}>
       <div className={styles.AdminSearch}>
          <SerachField handleSerach={handleSerach} searchTerm={searchTerm} />
         </div>
       {onClick && <AdminCreateButton onClick={onClick}/>}
 </div> 
 ) 
} 
 export default AdminHeader