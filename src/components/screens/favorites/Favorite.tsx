import { useRouter } from 'next/router'
import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import SceletonsLoading from '@/components/ui/skeletonsLoading/SkeletonsLoading'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Favorite.module.scss'
import FavoriteItem from './FavoriteItem/FavoriteItem'
import { useFavorites } from './useFavorites'

const Favorite: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites()

	const { user } = useAuth()
	const { replace } = useRouter()

	if (!user) {
		replace('/auth')
	}

	return (
		<Meta title='Favorites'>
			<Heading title='Favorites' />
			<section>
				{isLoading ? (
					<SceletonsLoading count={4} />
				) : (
					<div className={styles.favorite}>
						{favoriteMovies?.map(movie => (
							<FavoriteItem movie={movie} key={movie._id} />
						))}
					</div>
				)}
			</section>
		</Meta>
	)
}
export default Favorite
