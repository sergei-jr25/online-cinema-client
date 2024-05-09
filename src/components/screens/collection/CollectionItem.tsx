import Link from 'next/link'
import { FC } from 'react'

import styles from './Collection.module.scss'
import CollectionImage from './CollectionImage'
import { ICollection } from './collection.interface'

const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => {
	return (
		<Link href={`/genre/${collection.slug}`} className={styles.collectionItem}>
			<div className={styles.media}>
				<CollectionImage collection={collection} />
			</div>
			<div className={styles.collectionItem__title}>{collection.title}</div>
			<div className={styles.behind}>
				<CollectionImage collection={collection} />
			</div>
			<div className={styles.second}>
				<CollectionImage collection={collection} />
			</div>
		</Link>
	)
}
export default CollectionItem
