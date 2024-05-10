import { FC } from 'react'

import styles from './SideBar.module.scss'
import MoviesContainer from './moviesContainer/MoviesContainer'
import Search from './serach/Search'

const SideBar: FC = () => {
	return (
		<div className={styles.saibar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default SideBar
