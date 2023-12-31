import { siteName, titleHead } from '@/config/seo.config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { IMeta } from './meta.interface'
import LogoImage from '@/assets/images/logo.svg'

const Meta: FC<IMeta> = ({ title, decription, image,children }) => {
   
   const { asPath } = useRouter()
   const currentUrl = 'http://localhost:3000/api' + asPath

  return (
     <>
        <Head >
           <title itemProp='headLine'>{ titleHead(title)}</title>
        {decription ?
              <>
                 <meta
                    itemProp='description'
                    name='description'
                    content='description'
                 />
                 <link rel='canonical' href={currentUrl} />
                 <meta property='og:locale' content='en' />
                 <meta property='og:title' content={ title} />
                 <meta property='og:image' content={image || LogoImage} />
                 <meta property='og:site_name' content={ siteName} />

                 <meta
                    property='og:description'
                    content={decription}
                 />
           </>
           : 
           <meta name='robots' content='noindex, nofollow'/>
           }
        </Head>
        {children}
    </>
  )
}

export default Meta