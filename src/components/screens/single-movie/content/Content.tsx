import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { useAuth } from '@/hooks/useAuth'

import { IMovies } from '@/shared/types/movies.types'

import { getActorUrl, getGenreUrl } from '@/config/url.config'

import FavoriteButton from '../../favorites/favoriteButton/FavoriteButton'

import styles from './Content.module.scss'
import ContentList from './content-list/ContentList'

const Content: FC<{ movie: IMovies }> = ({ movie }) => {
	const { user } = useAuth()

	return (
		<section className={styles.content}>
			<div className={styles.list}>
				<h1 className={styles.title}>{movie.title}</h1>
				<div className={`${styles.items} ${styles.items_info}`}>
					<span>{movie.parameters.country}</span>
					<span>{movie.parameters.year}</span>
					<span>{movie.parameters.duration} min .</span>
				</div>
				<div className={styles.items}>
					<ContentList
						name='Genres:'
						links={movie.genres.slice(0, 3).map(genre => ({
							_id: genre._id,
							title: genre.name,
							link: getGenreUrl(genre.slug)
						}))}
					/>
				</div>

				<ContentList
					name='Actor:'
					links={movie.actors.slice(0, 3).map(actor => ({
						_id: actor._id,
						title: actor.name,
						link: getActorUrl(actor.slug)
					}))}
				/>

				{user && (
					<div className={styles.favorite}>
						<FavoriteButton movieId={movie._id} />
					</div>
				)}
				<div className={styles.rating}>
					<MaterialIcon name='MdStar' />
					{movie.rating.toFixed(1)}
				</div>
			</div>
		</section>
	)
}
export default Content
