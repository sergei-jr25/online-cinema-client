import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'

import Meta from '@/utils/meta/Meta'

import styles from './SingleMovie.module.scss'
import Content from './content/Content'
import { useUpdateCountMovies } from './useUpdateCountMovies'
import { IMoviePage } from '@/pages/movie/[slug]'

const DynamicPlayer = dynamic(
	() => import('@/components/ui/video-player/VideoPlayer'),
	{ ssr: false }
)
const DynamicRate = dynamic(() => import('./single-movie/RateMovie'), {
	ssr: false
})

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	const movieSlug = String(movie?.slug)
	useUpdateCountMovies(movieSlug)

	console.log('movie', movie)

	return (
		<>
			{movie && (
				<div className={styles.container}>
					<Meta title={movie.title} decription={`watch ${movie.title}`} />
					<div className={styles.banner}>
						<Banner
							image={movie.bigPoster}
							Detail={() => <Content movie={movie} />}
						/>
					</div>
					{/* <SubHeading subtitle={movie.title} /> */}
					<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />

					<Gallery items={similarMovies} title='Similar' />

					<div className={styles.rate}>
						<DynamicRate id={movie._id} slug={movie.slug} />
					</div>
				</div>
			)}
		</>
	)
}
export default SingleMovie
