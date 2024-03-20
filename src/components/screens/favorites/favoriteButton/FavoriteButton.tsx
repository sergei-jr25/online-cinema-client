import cn from 'clsx'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import { userSerive } from '@/services/userService'

import { toastrError } from '@/utils/toasrt-error'

import { useFavorites } from '../useFavorites'

import styles from './FavoriteButton.module.scss'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const { favoriteMovies, refetch } = useFavorites()
	const [isSmahed, setIsSmahed] = useState(false)

	useEffect(() => {
		if (!favoriteMovies) return
		const isHasMovie = favoriteMovies.some(m => m._id === movieId)
		if (isSmahed !== isHasMovie) setIsSmahed(isHasMovie)
	}, [isSmahed, favoriteMovies, movieId])

	const { mutateAsync } = useMutation(
		'update favorite',
		() => userSerive.togleFavorites(movieId),
		{
			onSuccess: () => {
				setIsSmahed(!isSmahed)
				refetch()
			},
			onError: error => {
				toastrError(error, 'Update favorite list')
			}
		}
	)

	return (
		<button
			className={cn(styles.button, {
				[styles.button__animate]: isSmahed
			})}
			onClick={() => mutateAsync()}
		>
			<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z'
				/>
			</svg>
		</button>
	)
}
export default FavoriteButton
