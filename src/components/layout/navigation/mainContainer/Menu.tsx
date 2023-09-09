import  {FC} from 'react'
import { IMenu } from './menu.interface'
import styles from './menu.module.scss'
import MenuItem from './MenuItem'

const Menu:FC<{menu:IMenu}> = ({menu: {items, title}}) => {
  return (
     <div>
        <div className={styles.subtitle}>{ title}</div>
        <ul className={styles.list}>         
           {items.map(item => <MenuItem key={item.link} item={item} /> )}                   
        </ul>    
    </div>
  )
}

export default Menu