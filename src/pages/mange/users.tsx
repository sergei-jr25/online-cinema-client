import UserList from '@/components/screens/admin/users/UserList'
import { NextPageAuth } from '@/shared/types/auth.types'
import React from 'react'

const UserListPage: NextPageAuth = () => {
  return (
    <div>
      <UserList/>
    </div>
  )
}

UserListPage.isOnlyAdmin = true



export default UserListPage 