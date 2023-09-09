import Button from '@/utils/form-elemtns/Button'
import React, { FC } from 'react'
import MoviesContainer from './moviesContainer/MoviesContainer'
import styles from './saidbar.module.scss'
import Search from './serach/Search'
 

const Saidbar:FC = ( ) => {
  return (
    <div className={ styles.saibar}>
      <Search />
      <MoviesContainer />
     </div>
  )
}

export default Saidbar