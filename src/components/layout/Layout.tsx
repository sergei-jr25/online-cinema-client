import React, { FC } from 'react'
import MaterialIcon from '../ui/MaterialIcon'
import { ILayout } from './layout.interface'
import styles from './layout.module.scss'
import Navigation from './navigation/Navigation'
import Saidbar from './saidbar/Saidbar'


const Layout: FC<ILayout> = ({children}) => {
  return (
     <div className={styles.container}>
        <Navigation />
        <div>{children}</div>
      <Saidbar />
      <MaterialIcon name='Md17Mp'/>
    </div>
  )
}

export default Layout