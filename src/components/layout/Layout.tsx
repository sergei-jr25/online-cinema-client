import { FC } from 'react'

import { ILayout } from './layout.interface'
import styles from './layout.module.scss'
import Navigation from './navigation/Navigation'
import Saidbar from './saidbar/Saidbar'

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.layout__container}>
				<Navigation />
				<div className={styles.layout__body}>{children}</div>
				<Saidbar />
			</div>
		</div>
	)
}

export default Layout
