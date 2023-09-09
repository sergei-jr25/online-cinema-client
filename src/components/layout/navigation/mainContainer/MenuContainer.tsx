import MaterialIcon from '@/components/ui/MaterialIcon'
import React, { FC } from 'react'
import Auth from './auth/Auth'
import GenersMenu from './geners/GenersMenu'
import Menu from './Menu'
import { menus } from './menu.data'
import styles from './menu.module.scss'

const MenuContainer: FC = () => {
  const [firstMenu, userMenu] = menus
  return (
    <div className={styles.menus}>
      <Menu menu={firstMenu} /> 
      <GenersMenu />
      <div>
        <Menu menu={userMenu} />
        <Auth />
 
      </div>
    </div>
  )
}

export default MenuContainer