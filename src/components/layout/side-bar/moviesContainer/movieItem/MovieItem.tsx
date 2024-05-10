import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMovies } from '@/shared/types/movies.types'

import { getGenersListEach } from '@/utils/movies/getGenresListEach'

import { getGenersUrl } from '@/config/api.config'
import { getMovieUrl } from '@/config/url.config'

import styles from './MovieItem.module.scss'

const MoviesItem: FC<{ movie: IMovies }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<Link className={styles.cover} href={getMovieUrl(movie.slug)}>
					<Image
						className={styles.poster}
						fill
						src={movie.poster}
						priority
						alt={movie.title}
					/>
				</Link>
			</div>
			<div className={styles.content}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((gener, index) => (
						<Link key={gener._id} href={getGenersUrl(gener.slug)}>
							{getGenersListEach(index, movie.genres.length, gener.name)}
						</Link>
					))}
				</div>
				<div className={styles.rate}>
					<MaterialIcon name='MdStar' />
					<span> {movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MoviesItem
