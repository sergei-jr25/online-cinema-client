import Catalog from '@/components/ui/catalog-movies/Catalog'
import { ActorService } from '@/services/ActorService'
import { genreService } from '@/services/genreService'
import { moviesService } from '@/services/moviesSerive'
import { IActor, IMovies } from '@/shared/types/movies.types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Error404 from '../404'

interface IActorPage {
	movies: IMovies[]
	actor: IActor | undefined
}

const ActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
	return (
		<>
			{actor ? (
				<>
					<Catalog movies={movies || []} title='Actor movie' />
					<h1>ACTOR MOVIE</h1>
				</>
			) : (
				<Error404 />
			)}
		</>
	)
}
export default ActorPage

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await genreService.getAll()
		const paths = genres.map(genre => ({
			params: { slug: genre.slug }
		}))

		return { paths, fallback: 'blocking' }
	} catch (error) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))
		const { data: movies } = await moviesService.getByActor(actor._id)

		return {
			props: {
				movies,
				actor
			},
			revalidate: 60
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}
