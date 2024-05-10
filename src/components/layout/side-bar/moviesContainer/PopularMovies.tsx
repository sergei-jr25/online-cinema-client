import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'

import { moviesService } from '@/services/moviesSerive'

import MoviesList from './MoviesList'

const PopularMovies: FC = () => {
	const { isLoading, data } = useQuery('Popular movies in sidebar', () =>
		moviesService.getPopularaMovies()
	)

	return (
		<div>
			{isLoading ? (
				<div>
					<Skeleton count={4} />
				</div>
			) : (
				<MoviesList
					link='/favorites'
					title='Popular movies'
					movies={data || []}
				/>
			)}
		</div>
	)
}

export default PopularMovies
