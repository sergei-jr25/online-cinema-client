import { getAdminUrl } from '@/config/url.config'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import MenuItem from '../MenuItem'
import LogoutButton from './LogoutButton'
import styles from './Auth.module.scss'

const Auth: FC = () => {
  
  const { user } = useAuth()
 
 
  

  return (
    <div className={styles.list}>
      {user  
        ? <>
          <MenuItem item={{icon:'MdSettings', link: '/profile', name: 'Profile'}}/>
          <LogoutButton/>
        </>
        : <div>
            <MenuItem item={{icon:'MdLogin', link: '/auth', name: 'Login'}}/>
      </div>
      }
      
      {
        user?.isAdmin && <MenuItem item={{icon:'MdOutlineLooks', link: getAdminUrl(''), name: 'Admin panel'}}/>

      }
    </div>
  )
}

export default Auth