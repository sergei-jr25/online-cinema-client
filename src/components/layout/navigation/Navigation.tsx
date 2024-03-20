import { FC } from 'react'

import Logo from './Logo'
import MenuContainer from './mainContainer/MenuContainer'
import styles from './navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
