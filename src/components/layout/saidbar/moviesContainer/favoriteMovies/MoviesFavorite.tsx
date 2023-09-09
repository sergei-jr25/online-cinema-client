import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { useAuth } from '@/hooks/useAuth'
import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import MoviesList from '../MoviesList'
import MoviesNoAuth from './MoviesNoAuth'

const MoviesFavorite: FC = () => {
  
  const { favoriteMovies, isLoading, refetch } = useFavorites()
  const { user } = useAuth()
  
   
  if(!user) return <MoviesNoAuth/>

  return (
    <div>
      {isLoading
        ? <Skeleton count={3}/>
        : <MoviesList 
          link='/favorites' 
          movies={favoriteMovies?.slice(0, 3) || []} 
          title='Favorites' 
        />}
    </div>
  )
}

export default MoviesFavorite