import { ChangeEvent, useCallback, useState } from 'react'
import { useMutation } from 'react-query'

import { fileSerivce } from '@/services/file.service'

import { toastrError } from '@/utils/toasrt-error'

// import {toastr} from 'react-redux-toastr'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFiel: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => fileSerivce.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url)
			},
			onError: error => {
				toastrError(error, 'Upload image')
			}
		}
	)

	const uploadFiel = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)

			const files = e.target.files

			if (!files?.length) return
			const formData = new FormData()
			formData.append('image', files[0])

			await mutateAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[mutateAsync]
	)

	return { uploadFiel, isLoading }
}
