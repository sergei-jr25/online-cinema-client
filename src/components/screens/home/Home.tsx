import Layout from '@/components/layout/Layout'
import Navigation from '@/components/layout/navigation/Navigation'
import Gallery from '@/components/ui/gallery/Gallery'
import Slider from '@/components/ui/slider/Slider'
import Heading from '@/utils/heading/Heading'
import Meta from '@/utils/meta/Meta'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { IHome } from './home.interface'
import styles from './Home.module.scss'


 
const Home:FC<IHome> = ({slides,actors,trendingMovies}) => {
  return (
    <Meta title="Watch movies online"
      decription='Watch movies and TV shows online or stream right to your browser'
    >
      <div className={styles.container}>
      <Heading title='Watch movies online' />
      {slides.length && <Slider slides={slides} buttonTitle='Watch'/>}
      <div>
          <h2 className={ styles.title}>Trending now</h2>
        { trendingMovies.length && <Gallery items={trendingMovies}/> }
      </div>

      <div>
        <h2  className={ styles.title}>Best  actors</h2>
        { actors.length && <Gallery items={actors}/> }
      </div>
      </div>
    </Meta>
  )
}

export default Home