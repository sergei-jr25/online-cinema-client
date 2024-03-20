import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { IMovies } from '@/shared/types/movies.types'

import { getMovieUrl } from '@/config/url.config'

import FavoriteButton from '../favoriteButton/FavoriteButton'

import styles from './FavoriteItem.module.scss'

const FavoriteItem: FC<{ movie: IMovies }> = ({ movie }) => {
	const { user } = useAuth()

	return (
		<div className={styles.favoriteItem}>
			{user && (
				<div className={styles.favoriteItem__icon}>
					<FavoriteButton movieId={movie._id} />
				</div>
			)}

			<Link
				className={styles.favoriteItem__link}
				href={getMovieUrl(movie.slug)}
			>
				<Image
					src={movie.bigPoster}
					alt={movie.title}
					fill
					priority
					draggable
				/>
			</Link>
		</div>
	)
}
export default FavoriteItem
