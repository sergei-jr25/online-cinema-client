import { FC, useEffect, useState } from 'react'

import Menu from './Menu'
import Auth from './auth/Auth'
import GenersMenu from './geners/GenersMenu'
import { menus } from './menu.data'
import styles from './menu.module.scss'

const MenuContainer: FC = () => {
	const [firstMenu, userMenu] = menus
	const [isOpenMenu, setIsOpenMenu] = useState(false)
	useEffect(() => {
		if (isOpenMenu) {
			document.body.classList.add('menu-open') // Добавить класс к body
		} else {
			document.body.classList.remove('menu-open') // Удалить класс из body
		}
	}, [isOpenMenu])

	return (
		<div className={styles.menu}>
			<button
				type='button'
				onClick={() => setIsOpenMenu(!isOpenMenu)}
				className={`${styles.menu__icon} ${styles.iconMenu} ${
					isOpenMenu ? styles.iconMenu_open : ''
				}`}
			>
				<span></span>
			</button>
			<nav
				className={`${styles.menu__body} ${
					isOpenMenu ? styles.menu__body_open : ''
				}`}
			>
				<Menu menu={firstMenu} />
				<GenersMenu />
				<div>
					<Menu menu={userMenu} />
					<Auth />
				</div>
			</nav>
		</div>
	)
}

export default MenuContainer
