import { useRouter } from 'next/router'
import { FC } from 'react'

import Button from '@/components/ui/form-elements/Button'

import styles from './Movies.module.scss'
import MoviesItem from './movieItem/MovieItem'
import { IMoviesList } from './movies-list.interfice'

const MoviesList: FC<IMoviesList> = ({ link, movies, title }) => {
	const { push } = useRouter()
	return (
		<div className={styles.items}>
			<h2 className={styles.title}>{title}</h2>
			{movies.slice(0, 3).map(movie => (
				<MoviesItem movie={movie} key={movie._id} />
			))}
			<Button onClick={() => push(link)}> See more </Button>
		</div>
	)
}

export default MoviesList
