import { FC } from 'react'

import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Collection.module.scss'
import CollectionItem from './CollectionItem'
import { ICollection } from './collection.interface'

const Collection: FC<{ collections: ICollection[] }> = ({ collections }) => {
	const title = 'Discovery'
	const decription = 'In this section you will film'

	return (
		<Meta title={title} decription={decription}>
			<Heading title={title} />
			<Description text={decription} />
			<section className={styles.items}>
				{collections.map(collection => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}
export default Collection
