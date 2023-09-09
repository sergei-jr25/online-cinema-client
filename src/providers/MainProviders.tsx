import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import {Provider} from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReduxToast from './ReduxToast'
import {store} from '@/store/store'
import HeadProvider from './HeadProvider'
import AuthProvider from './auhProvider/AuthProvider'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'


const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false
      }
   }
})

type TypeMainProviders = TypeComponentAuthFields & {children:any}

const MainProviders:FC<TypeMainProviders> = ({children, Component}) => {
   return (
      <HeadProvider>
       <Provider store={store}>
         <QueryClientProvider client={queryClient}>
               <ReduxToast />
             <AuthProvider Component={ Component} >
                <Layout>{children}</Layout>
            </AuthProvider>               
            </QueryClientProvider>
         </Provider>
      </HeadProvider>
  )
}

export default MainProviders