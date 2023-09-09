import AdminHeader from '@/components/ui/admin-navigation/admin-table/AdminHeader'
import AdminTable from '@/components/ui/admin-navigation/admin-table/AdminTable/AdminTable'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import {FC} from 'react' 
import { useUser } from './useMovie'
import Select from 'react-select'


const MovieList: FC = () => { 
   
   const { isLoading, data, searchTerm, handleSearch, deleteAsync,createAsync } = useUser()   
   const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

 return ( 
    <div>
       <AdminNavigation/>
       <AdminHeader
          handleSerach={handleSearch}
          searchTerm={searchTerm}
          onClick={createAsync }
       />

       <AdminTable isLoading={isLoading } 
         removeHanlder={ deleteAsync} 
         headerItems={ ['Title', 'Movies-list', 'rating']} 
          tableItems={data || []} 
          className={'grid'}
       />
 </div> 
 ) 
} 
 export default MovieList