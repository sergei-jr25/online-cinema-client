import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { IVideoElement } from "./video.interface"

export const useVideo = () => {

   const videoRef = useRef<IVideoElement>(null)
   
   const [isPlaying, setIsPlaying] = useState(false)
   const [currentTime, setCurrentTime] = useState(0)
   const [videoTime, setVideoTime] = useState(0)
   const [progress, setProgerss] = useState(0)
   
console.log('progress', progress);
console.log('videoRef.current', videoRef.current?.currentTime);

   useEffect(
      () => {
         if (videoRef.current?.duration) {
            setVideoTime(videoRef.current?.duration)
      }
      }, [videoRef.current?.duration]
   )
   
   const videoToggle = useCallback(() => {
         if (!isPlaying) {            
            videoRef.current?.play()
            setIsPlaying(true)
         } else {       
            videoRef.current?.pause()
            setIsPlaying(false)
         }
     }, [isPlaying])
     
   const forward = () => {
        if(videoRef.current) videoRef.current.currentTime += 10
     }
   const revert = () => {
        if(videoRef.current) videoRef.current.currentTime -= 10
     }

   const fullScreen = () => {
      const video = videoRef.current

      if(!video) return
      if (video.requestFullscreen) {
         video.requestFullscreen();
       } else if (video.msRequestFullScreen) {
         video.msRequestFullScreen();
       } else if (video.mozRequestFullScreen) {
         video.mozRequestFullScreen();
       } else if (video.webkitRequestFullScreen) {
         video.webkitRequestFullScreen();
       }
   }

 
   

   useEffect(() => {
      const video = videoRef.current
      if (!video) return
      
      const updateProgress = () => {
         setCurrentTime(video.currentTime)
         setProgerss((video.currentTime /  videoTime) * 100)
      } 

      video.addEventListener('timeupdate', updateProgress)

      return () => {
         video.removeEventListener('timeupdate', updateProgress)

      }
   }, [videoTime])

   useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => { 

      switch (e.key) {
         case 'ArrowRight':
            forward()
            break;
         case 'ArrowLeft':
            revert()
            break;
         case ' ': {
            e.preventDefault()
            videoToggle()
         }
            break;
         case 'f':
            fullScreen()
            break;
      
         default:
            return
         }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => {
         document.removeEventListener('keydown', handleKeyDown)
      }
   }, [videoToggle])

  return useMemo(() => ({
      videoRef,
      actions: {
        forward, revert, fullScreen, videoToggle
      },
      video: {
         videoTime, currentTime, progress, isPlaying
      }
   }),[ videoTime, currentTime, progress, isPlaying, videoToggle])
   
}