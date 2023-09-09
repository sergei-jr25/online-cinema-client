import React, { FC } from 'react'
import { adminNavData } from './admin-navigation.data'
import AdminItem from './AdminItem'
import styles from './Admin.module.scss'

const AdminNavigation:FC = () => {
  return (
     <nav className={ styles.nav}>
        <ul className={ styles.list}>
           {adminNavData.map(item=> <AdminItem key={item.link} item={item}/> )}
        </ul>
    </nav>
  )
}

export default AdminNavigation