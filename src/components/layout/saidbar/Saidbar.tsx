import { FC } from 'react'

import styles from './Saidbar.module.scss'
import MoviesContainer from './moviesContainer/MoviesContainer'
import Search from './serach/Search'

const Saidbar: FC = () => {
	return (
		<div className={styles.saibar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Saidbar
