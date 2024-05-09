import Image from 'next/image'
import { ChangeEvent, FC, useRef, useState } from 'react'

import { IUploadFiles } from '@/components/ui/form-elements/form.interface'
import SkeletonsLoading from '@/components/ui/skeletonsLoading/SkeletonsLoading'

import { IVideoElement } from '../../video-player/video.interface'

import styles from './UploadField.module.scss'
import { useUpload } from './useUpload'

const UploadField: FC<IUploadFiles> = (
	{ onChange, placeholder, error, folder, noImage = false, value },
	e: ChangeEvent<HTMLInputElement>
) => {
	const { uploadFiel, isLoading } = useUpload(onChange, folder)
	const [isPlaying, setIsPlaying] = useState(false)

	const videoRef = useRef<IVideoElement>(null)

	const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
		uploadFiel(e)
	}

	const handelPlay = () => {
		if (!isPlaying && videoRef.current) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}

		// if (videoRef.current?.play() !== undefined) {
		//   videoRef.current?.play().then(_ => {
		//     // Automatic playback started!
		//     // Show playing UI.
		//     // We can now safely pause video...
		//     videoRef.current?.pause()
		//   })
		// }
	}

	return (
		<>
			<div className={styles.field}>
				<label className={styles.label}>
					<span>{placeholder}</span>
					<input onChange={handleClick} type='file' />
					<div className={styles.button}>Выбрать файл</div>
					{error && <div>{error?.message}</div>}
				</label>
				{!noImage ? (
					isLoading ? (
						<SkeletonsLoading />
					) : (
						value && (
							<Image
								alt=''
								src={value}
								unoptimized
								width={200}
								height={200}
								className={styles.image}
							/>
						)
					)
				) : isLoading ? (
					<SkeletonsLoading />
				) : (
					value && (
						<video
							onClick={handelPlay}
							className={styles.video}
							ref={videoRef}
							src={`${value}#t=8`}
							preload='metada'
						/>
					)
				)}
			</div>
		</>
	)
}
export default UploadField
