import { FC } from 'react'

import styles from './Movies.module.scss'

const MoviesNoAuth: FC = () => {
	return (
		<div className={styles.moviesAuth}>
			for viewing favorite pls authrorizatione
		</div>
	)
}

export default MoviesNoAuth
