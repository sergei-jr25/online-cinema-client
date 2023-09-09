import Button from '@/utils/form-elemtns/Button'
import React, { FC } from 'react'
import MoviesItem from './movieItem/MovieItem'
import { IMoviesList } from './movies-list.interfice'
import styles from './Movies.module.scss'

const MoviesList:FC<IMoviesList> = ({link,movies,title}) => {
  return (
    <div className={styles.items }>
        <h2>{title }</h2>
      {movies.slice(0, 3).map(movie => <MoviesItem movie={movie} key={movie._id} />)}
      <Button> See more </Button>

    </div>
  )
}


export default MoviesList