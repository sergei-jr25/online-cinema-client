import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant, shadow }) => {
	return (
		<div className={`${styles.item} ${shadow ? styles.item_shadow : ''}`}>
			<Link href={item.link}>
				<div
					className={cn(styles.link, {
						[styles.withText]: item.content,
						[styles.horizontal]: variant === 'horizontal',
						[styles.vertical]: variant === 'vertical'
					})}
				></div>
				<div className={styles.item__image}>
					<Image
						src={item.posterPath}
						alt={item.name}
						fill
						priority
						draggable
					/>
				</div>
			</Link>

			{item.content && (
				<div className={styles.content}>
					{item?.content?.title && (
						<div className={styles.title}>{item.content.title}</div>
					)}
					{item?.content?.subtitle && (
						<div className={styles.subtitle}>{item.content.subtitle}</div>
					)}
				</div>
			)}
		</div>
	)
}
export default GalleryItem
