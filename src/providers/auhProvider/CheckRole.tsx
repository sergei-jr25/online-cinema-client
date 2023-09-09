import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

const CheckRole: FC<TypeComponentAuthFields> = ({children, Component: { isOnlyAdmin, isOnlyUser } }) => {
   

   const { user } = useAuth()
   
   const router = useRouter()
   

   const Children = () => <>{children}</>

   // if (!isOnlyAdmin && !isOnlyUser) return <Children/>
   
   if (user?.isAdmin) return <Children/>
   
   if (isOnlyAdmin) {
      router.asPath !== '/404' && router.replace('/404')
   }

   const isUser = user && !user.isAdmin

   if (isUser && isOnlyUser) return <Children />
   else {
      router.pathname === '/auth' && router.replace('/auth')
      return null
   }

}

export default CheckRole