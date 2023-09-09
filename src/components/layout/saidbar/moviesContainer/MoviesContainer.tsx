import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import MoviesFavorite from './favoriteMovies/MoviesFavorite'
import { IMoviesList } from './movies-list.interfice'
import MoviesList from './MoviesList'
import PopularMovies from './PopularMovies'
import styles from './Movies.module.scss'



const DynamicFavorites = dynamic(()=> import ('./favoriteMovies/MoviesFavorite'))

 
const MoviesContainer:FC = () => {
  return (
    <div className={ styles.container}>
      <PopularMovies />
      <DynamicFavorites/>
    </div>
  )
}

export default MoviesContainer