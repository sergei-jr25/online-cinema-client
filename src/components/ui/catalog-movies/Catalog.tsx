import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { getMovieUrl } from '@/config/url.config'

import GalleryItem from '../gallery/GalleryItem'

import styles from './Catalog.module.scss'
import { ICatallog } from './catalog.interface'

const Catalog: FC<ICatallog> = ({ movies, title, description }) => {
	console.log('movies', movies)

	return (
		<Meta title={title}>
			<div className={styles.heading}>
				<Heading title={title} className={styles.title} />
				{description && <div className={styles.description}>{description}</div>}
			</div>
			<div className={styles.movies}>
				{movies.map(movie => (
					<GalleryItem
						key={movie._id}
						item={{
							name: movie.title,
							link: getMovieUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: {
								title: movie.title
							}
						}}
						variant='vertical'
					/>
				))}
			</div>
		</Meta>
	)
}
export default Catalog
