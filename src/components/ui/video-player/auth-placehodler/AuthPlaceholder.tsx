import { FC } from 'react'

import AuthButton from './AuthButton'
import styles from './AuthPlaceholder.module.scss'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.AuthPlaceholder}>
			<div className={styles.AuthPlaceholder__text}>
				You most registartion in order to watching movies
			</div>
			<AuthButton slug={slug} />
		</div>
	)
}
export default AuthPlaceholder
