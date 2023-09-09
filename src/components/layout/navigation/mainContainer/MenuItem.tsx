import Link from 'next/link'
import cn from 'clsx'
import React, { FC } from 'react'

import styles from './menu.module.scss'
import { IMenuItem } from './menu.interface'
import { useRouter } from 'next/router'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { link, name, icon } }) => {
  const { asPath } = useRouter()
  const isActive = asPath === link
  

  return (
    <li className={styles.item }>
      <Link className={cn(styles.link,{
        [styles.active]:  isActive
        })} 
        href={link}> 
        <MaterialIcon name={icon} 
          />
          {name}
      </Link>
    </li>
  )
}

export default MenuItem