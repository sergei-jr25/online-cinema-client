import GenreList from '@/components/screens/admin/genres/GenreList'
import React from 'react'
import {FC} from 'react' 
import { NextPageAuth } from '@/shared/types/auth.types'


const GenresPage:NextPageAuth = () => { 
 return ( 
    <div>
       <GenreList/>
   </div>
 ) 
} 

GenresPage.isOnlyAdmin = true


 export default GenresPage