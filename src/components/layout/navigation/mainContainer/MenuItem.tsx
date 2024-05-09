import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMenuItem } from './menu.interface'
import styles from './menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item: { link, name, icon } }) => {
	const { asPath } = useRouter()
	const isActive = asPath === link

	return (
		<li className={styles.item}>
			<Link
				className={cn(styles.link, {
					[styles.active]: isActive
				})}
				href={link}
			>
				<MaterialIcon name={icon} />
				{name}
			</Link>
		</li>
	)
}

export default MenuItem
