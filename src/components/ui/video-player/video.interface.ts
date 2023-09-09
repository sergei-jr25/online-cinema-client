export interface IVideoPlayer {
   videoSource: string,
   slug: string
}

export interface IVideoElement extends HTMLVideoElement {
   msRequestFullScreen?: () => void,
   webkitRequestFullScreen?: () => void,
   mozRequestFullScreen?: () => void,
}

