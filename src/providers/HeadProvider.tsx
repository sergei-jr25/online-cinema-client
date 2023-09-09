import Head from 'next/head'
import  NextNProgress  from 'nextjs-progressbar'
import React, { FC } from 'react'
import FaviIcons from './FaviIcons'



const HeadProvider:FC<{children:any}> = ({children}) => {
  return (
     <>
        <NextNProgress 
        color="#29D" 
        startPosition={0.3} 
        stopDelayMs={200} height={3}  
        />

        <Head > 
           <meta charSet='UTF-8' />
           <meta
              name='viewport'
              content='width=device-width, inital-scale=1, maximum-scale=1.0' />
           <FaviIcons/>

           <meta name='theme-color' content={'#5555'} />
           <meta name='msapplication-navbutton-color' content={'#7777'} />
           <meta name='apple-mobile-web-app-status-bar-style' content={ '#181B1E'} />
        </Head> 
         {children}
    </>
  )
}

export default HeadProvider