import Link from 'next/link'
import { FC, Fragment } from 'react'

import { IConentList } from '../content.interface'

import styles from './ContentList.module.scss'

const ContentList: FC<IConentList> = ({ links, name }) => {
	return (
		<div className={styles.list}>
			<div className={styles.list__name}>{name}</div>
			{links.map((link, idx) => (
				<Fragment key={idx}>
					<Link className={styles.list__link} href={link.link}>
						{link.title}
						{idx + 1 === links.length ? '' : ' ,'}
					</Link>
				</Fragment>
			))}
		</div>
	)
}
export default ContentList
