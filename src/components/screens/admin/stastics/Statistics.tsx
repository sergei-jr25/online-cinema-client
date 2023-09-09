import React, { FC } from 'react'
import CountUsers from './CountUsers'
import PopularMovies from './PopularMovies'
import styles from './Statistics.module.scss'

const Statistics: FC = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.block }>
         <CountUsers />
      </div>
      <div className={styles.block }>
      <PopularMovies/>
      </div>
    </div>
  )
}

export default Statistics