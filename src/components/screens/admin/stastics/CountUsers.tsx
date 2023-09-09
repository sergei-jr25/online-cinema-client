import { AdminService } from '@/services/AdminService'
import Heading from '@/utils/heading/Heading'
import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'

const CountUsers: FC = () => {
  
  const {isLoading, data: response } = useQuery('Count users',
    () => AdminService.getCountsUsers()
    )

  
  return (
    <div>
      <Heading title='Users count'/>
      {isLoading ? <Skeleton count={4} />
        : <div> {response?.data} </div>
      }
    </div>
  )
}

export default CountUsers