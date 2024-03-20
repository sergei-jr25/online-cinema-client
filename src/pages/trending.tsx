import { NextPage } from 'next'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovies } from '@/shared/types/movies.types'

import { moviesService } from '@/services/moviesSerive'

const TredningPage: NextPage<{ movies: IMovies[] }> = ({ movies }) => {
	return (
		<div>
			<Catalog
				movies={movies || []}
				title='TredningPage movies'
				description='New tredningPage and series in exccellent quality'
			/>
		</div>
	)
}
export default TredningPage

export async function getStaticProps() {
	try {
		const moviesTredning = await moviesService.getPopularaMovies()

		return {
			props: {
				movies: moviesTredning
			},
			revalidate: 60
		}
	} catch (error) {
		return {
			props: {
				movies: []
			}
		}
	}
}
