import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'
import { getActorUrl, getMovieUrl } from '@/config/url.config'
import { ActorService } from '@/services/ActorService'
import { moviesService } from '@/services/moviesSerive'
import { getGenresList } from '@/utils/movies/getGenresListEach'
import { NextPage } from 'next'

const index: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<>
			<Home
				slides={slides || []}
				actors={actors || []}
				trendingMovies={trendingMovies || []}
			/>
		</>
	)
}

export async function getStaticProps() {
	try {
		const { data: movies } = await moviesService.getAll('')
		const slides: ISlide[] = movies.slice(0, 4).map(movie => ({
			_id: movie._id,
			link: getMovieUrl(movie.slug),
			bigPoster: movie.bigPoster,
			title: movie.title,
			subTitle: getGenresList(movie.genres)
		}))

		const { data: dataActors } = await ActorService.getAll()

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map(actor => ({
			name: actor.name,
			posterPath: actor.photo,
			link: getActorUrl(actor.slug),
			content: {
				title: actor.name,
				subtitle: `+${actor.countMovies} movies`
			}
		}))
		const dataTrendingMovies = await moviesService.getPopularaMovies()
		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map(movie => ({
				name: movie.title,
				posterPath: movie.poster,
				link: getMovieUrl(movie.slug)
			}))

		return {
			props: {
				slides,
				actors,
				trendingMovies
			} as IHome,
			revalidate: 60
		}
	} catch (error) {
		return {
			props: {
				slides: []
			}
		}
	}
}

export default index
