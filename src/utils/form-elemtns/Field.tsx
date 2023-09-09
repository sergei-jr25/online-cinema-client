import React, { FC, forwardRef } from 'react'
import { IField } from './form.interface'
import styles from './form-element.module.scss'
const Field = forwardRef<HTMLInputElement, IField>(({ placeholder, error, type = 'text', ...rest }, ref) => {
 
  return (
    <>
      <label className={styles.label}>
        <span>{placeholder }</span>
        <input type={type} ref={ref} {...rest} />
      </label>

      {error && <div className={styles.error}>{ error.message}</div>}
    </>
  )
})

// Field.displayName = 'Field'



export default Field