import { getMovieUrl } from '@/config/url.config'
import { IMovies } from '@/shared/types/movies.types'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const SearchList: FC<{ movies: IMovies[] }> = ({ movies }) => {
   console.log('movies', movies);
   
  return (
     <div>
        {movies.length ? 
           movies.map(movie =>
              <div>
                 <Link
               key={movie._id}
               href={getMovieUrl(movie.slug)}>
               <Image
                  src={movie.poster}
                  width={100}
                  height={150}
                       alt={movie.title}
                       objectFit='cover'
               />
           </Link>
           </div>)  
           : <div>Movies not found</div>
      }
    </div>
  )
}

export default SearchList