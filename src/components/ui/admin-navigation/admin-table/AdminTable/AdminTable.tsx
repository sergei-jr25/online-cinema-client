import {FC} from 'react' 
import Skeleton from 'react-loading-skeleton'
import { ITableItem } from './admin-table.interface'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import styles from './AdminTable.module.scss'
import cn from 'clsx'

export interface IAdminTable {
   tableItems: ITableItem[],
   isLoading: boolean,
   headerItems: string[],
   removeHanlder: (id: string) => void
   className? : string
}

const AdminTable:FC<IAdminTable> = ({headerItems,isLoading,removeHanlder,tableItems, className}) => { 
 return ( 
    <div className={ styles.adminTable}> 
       <div className={cn(styles.header, { [styles.grid2]: className, [styles.grid3]: !className })}>
          <AdminTableHeader items={headerItems} className={className} />
         </div>
       {isLoading && <Skeleton count={4} />}
       {tableItems.length
          ? <div className={ styles.items}>
         { tableItems.map(item =>
             
             <AdminTableItem key={item._id} 
             handerRemove={() =>removeHanlder(item._id)} 
             ITableItem={item}
                />
             
             )}
          </div>
          : <div className={ styles.notFound}>Elements not found</div>
         }
 </div> 
 ) 
} 
 export default AdminTable