import SceletonsLoading from '@/utils/skeletonsLoading/SkeletonsLoading'
import React, { FC } from 'react'
import Menu from '../Menu'
import { usePopularGeneres } from './usePopularGeners'
import Skeleton from 'react-loading-skeleton'



const GenersMenu: FC = () => {
  
  const { isLoading, data } = usePopularGeneres()
  
  return (
    <div>
      {
        isLoading ? <div>  <SceletonsLoading count={5} /> </div>
          : <Menu menu={ {title: 'Popular genres', items: data || []}} />
      }
    </div>
  )
}

export default GenersMenu