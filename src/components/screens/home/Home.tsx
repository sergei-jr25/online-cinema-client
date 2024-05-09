import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import GalleryItem from '@/components/ui/gallery/GalleryItem'
import Heading from '@/components/ui/heading/Heading'
import Slider from '@/components/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

import styles from './Home.module.scss'
import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	const breakPointsTrending = {
		320: {
			slidesPerView: 1.3
		},
		480: {
			slidesPerView: 2.3
		},
		1024: {
			slidesPerView: 4
		},
		1440: {
			slidesPerView: 4.5
		}
	}
	const breakPointsActors = {
		320: {
			slidesPerView: 1.3
		},
		480: {
			slidesPerView: 2.3
		},

		1024: {
			slidesPerView: 4
		},
		1440: {
			slidesPerView: 7
		}
	}

	console.log('slides', slides)

	return (
		<Meta
			title='Watch movies online'
			decription='Watch movies and TV shows online or stream right to your browser'
		>
			<div className={styles.container}>
				<Heading title='Watch movies online' />
				{slides.length && (
					<div className={styles.movie}>
						<Slider slides={slides} buttonTitle='Watch' />
					</div>
				)}

				<div className={styles.trending}>
					<h2 className={styles.title}>Trending now</h2>
					{trendingMovies.length && (
						<div className={styles.items}>
							<Swiper spaceBetween={20} breakpoints={breakPointsTrending}>
								{trendingMovies.map(item => (
									<SwiperSlide>
										<GalleryItem
											item={item}
											variant='horizontal'
											key={item.name}
											shadow
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					)}
				</div>

				<div className={styles.actors}>
					<h2 className={styles.title}>Best actors</h2>
					{actors.length && (
						<div className={styles.items}>
							<Swiper spaceBetween={20} breakpoints={breakPointsActors}>
								{actors.map(item => (
									<SwiperSlide>
										<GalleryItem
											item={item}
											variant='horizontal'
											key={item.name}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					)}
				</div>
			</div>
		</Meta>
	)
}

export default Home
