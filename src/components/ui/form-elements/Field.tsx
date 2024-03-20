import { forwardRef } from 'react'

import styles from './form-element.module.scss'
import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', ...rest }, ref) => {
		console.log('rest', rest)

		return (
			<>
				<label className={styles.field}>
					<span className={styles.field__placeholder}>{placeholder}</span>
					<input
						type={type}
						ref={ref}
						{...rest}
						className={styles.field__input}
					/>
				</label>

				{error && <div className={styles.error}>{error.message}</div>}
			</>
		)
	}
)

// Field.displayName = 'Field'

export default Field
