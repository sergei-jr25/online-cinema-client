import { FC } from 'react'

import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'
import { IGalleryItem } from './gallery.interface'

const Gallery: FC<{ items: IGalleryItem[]; title?: string }> = ({
	items,
	title
}) => {
	return (
		<div className={styles.gallery}>
			{title && <div className={styles.gallery__title}>{title}</div>}
			<div className={styles.gallery__items}>
				{items.slice(0, 3).map(item => (
					<GalleryItem key={item.link} item={item} variant='vertical' />
				))}
			</div>
		</div>
	)
}
export default Gallery
