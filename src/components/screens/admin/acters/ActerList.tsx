import AdminHeader from '@/components/ui/admin-navigation/admin-table/AdminHeader'
import AdminTable from '@/components/ui/admin-navigation/admin-table/AdminTable/AdminTable'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import {FC} from 'react' 
import { useUser } from './useActer'


const ActerList: FC = () => { 
   
   const { isLoading, data, searchTerm, handleSearch, deleteAsync,createAsync } = useUser()
   

 return ( 
    <div>
       <AdminNavigation/>
       <AdminHeader 
       handleSerach={handleSearch} 
          searchTerm={searchTerm} 
          onClick={createAsync }
       />
       <AdminTable 
       isLoading={isLoading } 
       removeHanlder={ deleteAsync} 
          headerItems={['Title', 'counts movies']}
          tableItems={data || []}
       />
 </div> 
 ) 
} 
 export default ActerList