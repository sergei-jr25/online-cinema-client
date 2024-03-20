import { ChangeEvent, FC } from 'react'

import SerachField from '@/components/ui/serachField/SerachField'

import styles from './AdminTable.module.scss'
import AdminCreateButton from './adminCreateButton/AdminCreateButton'

export interface iAdminTable {
	onClick?: () => void
	searchTerm: string
	handleSerach: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<iAdminTable> = ({
	searchTerm,
	handleSerach,
	onClick
}) => {
	return (
		<div className={styles.AdminHeader}>
			<div className={styles.AdminSearch}>
				<SerachField handleSerach={handleSerach} searchTerm={searchTerm} />
			</div>
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}
export default AdminHeader
