import { getMovieUrl } from '@/config/url.config'
import { moviesService } from '@/services/moviesSerive'
import { IMovies } from '@/shared/types/movies.types'
import Heading from '@/utils/heading/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'
import styles from './Statistics.module.scss'

const PopularMovies: FC = () => {
  
  const {isLoading, data: movie } = useQuery('movies popular',
    () => moviesService.getPopularaMovies(),
    {select : (data):IMovies => data[0]}
  )  
 
  return (
    <div>
      <Heading title='Popular movies'/>
      {isLoading ? <Skeleton /> 
        : movie && <div>
            <div className={styles.opened}>
              {movie.countOpened || 0}
            </div>
         <div className={styles.wrap}>
          <Link className={styles.link} href={getMovieUrl(movie.slug)}>
            <Image className={styles.image} src={movie.poster} alt={ movie.title} fill/>
            </Link>
          </div> 
         
        </div>
      }
    </div>
  )
}

export default PopularMovies