import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin-navigation/admin-table/AdminHeader'
import AdminTable from '@/components/ui/admin-navigation/admin-table/AdminTable/AdminTable'

import styles from './UserList.module.scss'
import { useUser } from './useUser'

const UserList: FC = () => {
	const { isLoading, data, searchTerm, handleSearch, deleteAsync } = useUser()

	return (
		<div className={styles.users}>
			<AdminNavigation />
			<AdminHeader handleSerach={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHanlder={deleteAsync}
				headerItems={['Email', 'Date register']}
				tableItems={data || []}
			/>
		</div>
	)
}
export default UserList
