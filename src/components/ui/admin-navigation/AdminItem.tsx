import Link from 'next/link'
import React, { FC } from 'react'
import { INavAdmin } from './admin-navigation.interface'
import cn from 'clsx'
import styles from './Admin.module.scss'
import { useRouter } from 'next/router'

const AdminItem: FC<{ item: INavAdmin }> = ({ item: { link, title } }) => {
   
   const { asPath } = useRouter()
   
  return (
     <li className={styles.item}>
        <Link href={link} className={cn(styles.link,
           { [styles.active]: asPath === link }
        )}
         >{title}</Link>
    </li>
  )
}

export default AdminItem