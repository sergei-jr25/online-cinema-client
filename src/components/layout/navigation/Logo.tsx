import React, { FC } from 'react'
import logoImage from '@/assets/images/logo.svg'
import Image from 'next/image'
const Logo:FC = () => {
  return (
     <div>
        <Image src={logoImage} width={250} height={30} alt={'logotype'} />
    </div>
  )
}

export default Logo