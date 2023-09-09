import Heading from '@/utils/heading/Heading'
import Meta from '@/utils/meta/Meta'
import React from 'react'

const error500 = () => {
  return (
     <Meta title='Page not fount'>
        <Heading title='Server-side error ocured'/>
     </Meta>
  )
}

export default error500