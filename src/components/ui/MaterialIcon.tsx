import { TypeMaterialIcons } from '@/shared/types/icons.types'

import * as MaterialIcons from 'react-icons/md'
import React, { FC } from 'react'
import { useRenderClient } from '@/hooks/useRenderClient'

const MaterialIcon:FC<{name: TypeMaterialIcons}> = ({name}) => {
  
const {isRenderClient} = useRenderClient()
   const IconComponent = MaterialIcons[name]

   if (isRenderClient) {
      return <IconComponent/> || MaterialIcons.Md4GPlusMobiledata
   } else return null
}

export default MaterialIcon