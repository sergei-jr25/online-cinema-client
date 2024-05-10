import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './Movies.module.scss'
import PopularMovies from './PopularMovies'

const DynamicFavorites = dynamic(
	() => import('./favoriteMovies/MoviesFavorite')
)

const MoviesContainer: FC = () => {
	return (
		<div className={styles.container}>
			<PopularMovies />
			<DynamicFavorites />
		</div>
	)
}

export default MoviesContainer
