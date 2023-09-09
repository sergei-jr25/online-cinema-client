import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import Cookies from 'js-cookie'
import dynamic  from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'

const AuthProvider: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {

   const DynamicCheckRole =  dynamic(()=> import('./CheckRole'),  {ssr: false} )
   
   const { logout, checkAuth } = useActions()
   
   const { user } = useAuth()
   
   const { pathname } = useRouter()
   
   useEffect(() => {
      const accessToken = Cookies.get('accessToken')
      if(accessToken) checkAuth()
   }, [])

   useEffect(() => {
      const refreshToken = Cookies.get('refreshToken')
      if(!refreshToken && user) logout()
   }, [pathname])

   return !isOnlyAdmin && !isOnlyUser ? <>{children}</> : <DynamicCheckRole Component={{isOnlyAdmin,isOnlyUser}}>{ children}</DynamicCheckRole>
}

export default AuthProvider