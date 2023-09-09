import {FC} from 'react' 
import styles from './AdminTable.module.scss'
import cn from 'clsx'

const AdminTableHeader:FC<{items: string[], className?: string}> = ({items, className}) => { 
 return ( 
    <>
       {items.map(value =>
          <div key={value} className={styles.item}>
             {value}
          </div>)}
 </> 
 ) 
} 
 export default AdminTableHeader