import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import React, { FC } from 'react'
import Statistics from './stastics/Statistics'

const Admin:FC = () => {
  return (
    <div>
      <AdminNavigation/>
      <Statistics/>
    </div>
  )
}

export default Admin