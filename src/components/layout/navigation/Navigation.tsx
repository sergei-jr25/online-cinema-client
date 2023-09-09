import React, { FC } from 'react'
import Logo from './Logo'
import MenuContainer from './mainContainer/MenuContainer'
import styles from './navigation.module.scss'

const Navigation:FC = () => {
  return (
    <div>
      <Logo />
      <MenuContainer/>
    </div>
  )
}

export default Navigation