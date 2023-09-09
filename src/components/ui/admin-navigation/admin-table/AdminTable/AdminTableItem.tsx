import {FC} from 'react' 
 import { ITableItemAdmin } from './admin-table.interface'
import AdminTableActions from './AdminTableActions/AdminTableActions'
import styles from './AdminTable.module.scss'

const AdminTableItem: FC<ITableItemAdmin> = ({ handerRemove, ITableItem }) => { 
   
    

 return ( 
    <div className={styles.tableItem}>
       {ITableItem.items.map((value,idx) =>
          <div className={styles.tableValue} key={idx}>{value} </div>
         )
       }
       <AdminTableActions editUrl={ITableItem.editUrl} removeHandler={handerRemove}/>
 </div> 
 ) 
} 
 export default AdminTableItem