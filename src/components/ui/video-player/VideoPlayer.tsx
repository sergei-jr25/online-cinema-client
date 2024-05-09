import { FC, useCallback, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import MaterialIcon from '../MaterialIcon'

import styles from './VideoPlayer.module.scss'
import AuthPlaceholder from './auth-placehodler/AuthPlaceholder'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.interface'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {
	const { actions, video, videoRef } = useVideo()

	const [pause, setIsPause] = useState(false)
	const { user } = useAuth()

	const handleClick = useCallback(() => {
		if (!pause) {
			setIsPause(true)
		} else {
			setIsPause(false)
		}
	}, [pause])

	return (
		<div className={styles.video}>
			{user ? (
				<video
					className={styles.video__image}
					ref={videoRef}
					src={`${videoSource}#t=8`}
					preload='metada'
				/>
			) : (
				<AuthPlaceholder slug={slug} />
			)}

			{user && (
				<>
					<div className={styles.video__progress}>
						<div
							className={styles.video__progress_inner}
							style={{ width: `${video.progress}%` }}
						></div>
					</div>
					<div className={styles.video__control}>
						<div className={styles.video__items}>
							<button onClick={actions.revert} data-tooltip='- 10 sec'>
								<MaterialIcon name='MdHistory' />
							</button>

							<button
								onClick={actions.videoToggle}
								data-tooltip={video.isPlaying ? 'Stop' : 'Play'}
							>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>

							<button onClick={actions.forward} data-tooltip='+ 10 sec'>
								<MaterialIcon name='MdUpdate' />
							</button>
							<div className={styles.video__times}>
								<p>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>

								<p>
									{Math.floor(video.videoTime / 60) +
										':' +
										(
											'0' +
											Math.floor((video.videoTime - video.currentTime) % 60)
										).slice(-2)}
								</p>
							</div>

							<button
								className={styles.video__screen}
								onClick={actions.fullScreen}
								data-tooltip='full-screen'
							>
								<MaterialIcon name='MdFullscreen' />
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
export default VideoPlayer
