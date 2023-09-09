import React, { FC } from 'react'
import { IButton } from './form.interface'
import styles from './form-element.module.scss'

const Button:FC<IButton> = ({children, ...rest}) => {
  return (
    <button className={styles.button } {...rest}>
        { children}
    </button>
  )
}

export default Button