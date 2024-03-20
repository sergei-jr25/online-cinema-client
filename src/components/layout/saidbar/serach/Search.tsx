import SerachField from '@/components/ui/serachField/SerachField'

import styles from './Search.module.scss'
import SearchList from './serachList/SearchList'
import { useSearch } from './useSearch'

const Search = () => {
	const { isSuccess, serachHandle, search, data } = useSearch()
	console.log('data', data)

	return (
		<div className={styles.search}>
			<SerachField searchTerm={search} handleSerach={serachHandle} />
			<SearchList movies={data || []} search={search} />
		</div>
	)
}

export default Search
