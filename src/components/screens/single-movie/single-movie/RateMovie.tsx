import { Rating } from '@smastrom/react-rating'
import { FC } from 'react'

import AuthButton from '@/components/ui/video-player/auth-placehodler/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'

export interface IRateMovie {
	id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth()
	const { handleClick, isSended, rating } = useRateMovie(id)

	return (
		<div className={styles.rating}>
			<h2 className={styles.rating__title}>How do you like movie</h2>
			<p className={styles.rating__descr}>Ratins improve recomendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.rating__text}>Fhanks for rating</div>
					) : (
						<Rating
							style={{ maxWidth: 250 }}
							value={rating}
							onChange={handleClick}
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}
export default RateMovie
