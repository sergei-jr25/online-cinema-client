import MaterialIcon from '@/components/ui/MaterialIcon'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { FC, MouseEvent } from 'react'
import styles from './Auth.module.scss'
import cn from 'clsx'
 

const LogoutButton:FC = () => {

  const { logout } = useActions()
  const router = useRouter()

  const handleSubmit = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    logout()
    router.push('/')
  }
  

  return (
    <div className={styles.item}>
      <a className={cn(styles.link)} onClick={handleSubmit}>
        <MaterialIcon name='MdLogout' />
        <span>Logout</span>
      </a>
    </div>
  )
}

export default LogoutButton