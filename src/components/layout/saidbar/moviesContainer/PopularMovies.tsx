import { moviesService } from '@/services/moviesSerive'
import   { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'
import MoviesList from './MoviesList'

const PopularMovies: FC = () => {
  
  const {isLoading, data } = useQuery('Popular movies in saidbar',
    () => moviesService.getPopularaMovies()

  )

  return (
    <div>
      {isLoading ? <div><Skeleton count={4} /></div>
       : <MoviesList link='/trenidng' title='Popular movies' movies={data || []}/>  
      }
    </div>
  )
}

export default PopularMovies