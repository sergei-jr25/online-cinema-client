import Image from 'next/image'
import Link from 'next/link'
import { FC, useRef } from 'react'

import { IMovies } from '@/shared/types/movies.types'

import { getMovieUrl } from '@/config/url.config'

import styles from '../Search.module.scss'

const SearchList: FC<{ movies: IMovies[]; search: string }> = ({
	movies,
	search
}) => {
	const ref = useRef()

	// useEffect(() => {
	// 	if (!!search) {
	// 		document.body.classList.add('dark')
	// 	} else {
	// 		document.body.classList.remove('dark')
	// 	}
	// }, [search])

	// useEffect(() => {
	// 	const handleClickOutside = (event: any) => {
	// 		const body = document.body
	// 		const target = event.target
	// 		if (target.contains(ref.current)) {
	// 			body.classList.remove('dark')
	// 		}
	// 		console.log(target)
	// 	}

	// 	// Добавляем слушатель события клика при монтировании компонента
	// 	document.addEventListener('click', handleClickOutside)

	// 	// Удаляем слушатель события клика при размонтировании компонента
	// 	return () => {
	// 		document.removeEventListener('click', handleClickOutside)
	// 	}
	// }, [])

	if (!!!search) {
		return null
	}

	return (
		<div className={styles.movies}>
			{!!search &&
				(movies.length ? (
					movies.map(movie => (
						<div className={styles.movies__item}>
							<Link
								className={styles.movies__link}
								key={movie._id}
								href={getMovieUrl(movie.slug)}
							>
								<Image src={movie.poster} fill alt={movie.title} />
							</Link>
						</div>
					))
				) : (
					<div className={styles.movies__text}>Movies not found</div>
				))}
		</div>
	)
}

export default SearchList
