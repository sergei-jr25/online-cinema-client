import Image from 'next/image'
import { FC } from 'react'

import styles from './Collection.module.scss'
import { ICollection } from './collection.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title }
}) => {
	return (
		<div className={`${styles.image} `}>
			<Image alt={title} src={image} draggable={false} fill />
		</div>
	)
}
export default CollectionImage
