import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import '@/assets/styles/react-select.scss'
import '@/assets/styles/slider.scss'
import '@/assets/styles/editor.scss'
 

import MainProviders from '@/providers/MainProviders'
import '@/assets/styles/globals.css'
import type { AppProps } from 'next/app'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
  return <MainProviders Component={ Component} >
     <Component {...pageProps} />
    </MainProviders>

}

 