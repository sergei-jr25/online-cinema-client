import Admin from '@/components/screens/admin/Admin'
import { NextPageAuth } from '@/shared/types/auth.types'
import { NextPage } from 'next'
import React from 'react'

 

const AdminPage: NextPageAuth =  () => {
  return (
    <div>
      <Admin/>
    </div>
  )
}

AdminPage.isOnlyAdmin  = true

export default AdminPage