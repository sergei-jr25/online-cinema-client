import SerachField from '@/utils/serachField/SerachField'
import React from 'react'
import styles from './seach.module.scss'
import SearchList from './serachList/SearchList'
import { useSearch } from './useSearch'

const Search = () => {
  const {isSuccess,serachHandle, search, data} = useSearch()
  return (
    <div>
       <SerachField searchTerm={search} handleSerach={serachHandle}/>
      <SearchList movies={data || []} />
    </div>
  )
}

export default Search