import { FC } from 'react'

import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'
import styles from './menu.module.scss'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menuContainer}>
			<div className={styles.subtitle}>{title}</div>

			<ul className={styles.menu__list}>
				{items.map(item => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
		</div>
	)
}

export default Menu
