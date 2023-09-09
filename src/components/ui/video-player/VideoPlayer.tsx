import { useAuth } from '@/hooks/useAuth'
import {FC, useCallback, useState} from 'react' 
import MaterialIcon from '../MaterialIcon'
import AuthPlaceholder from './auth-placehodler/AuthPlaceholder'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.interface'
import styles from './VideoPlayer.module.scss'


const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => { 
   
   const { actions, video, videoRef } = useVideo()

   const [pause, setIsPause] = useState(false)
   const { user } = useAuth()
   
 

   const handleClick =useCallback(() => {
      if (!pause) {
         setIsPause(true)
      } else {
         setIsPause(false)
      }
   }, [pause])   
   
   return ( 
      <div className={styles.player }>
         {user
            ? (
               <video className={ styles.video} ref={videoRef} src={ `${videoSource}#t=8`} preload='metada'/>
            )
            : (<AuthPlaceholder slug={ slug} />)
         }

         <div className={styles.control }>
            <div className={styles.progress} style={{width: `${video.progress}%`}}>
            </div>
         </div>

         <div className={styles.items }>
               <button onClick={actions.revert}>
                  <MaterialIcon name='MdHistory'/>
                </button>
            
               <button onClick={actions.videoToggle}>
               <MaterialIcon name={video.isPlaying ?'MdPause' :'MdPlayArrow'} /> 
               </button>
      
               <button onClick={actions.forward}>
                  <MaterialIcon name='MdUpdate'/>
               </button>
      
             <button className={ styles.screen} onClick={actions.fullScreen}>
                  <MaterialIcon name='MdFullscreen'/>
               </button>
            </div>
            
            <div className={styles.times}>
               <p>
                  {Math.floor(video.currentTime / 60) + ':' + ('0' + Math.floor(video.currentTime % 60)).slice(-2)}
               </p>
               <p> / </p>
               <p>
               {Math.floor(video.currentTime / 60) + ':' + ('0' + Math.floor(video.currentTime % 60)).slice(-2)} 
               </p>
            </div>
      </div> 
   ) 
} 
 export default VideoPlayer