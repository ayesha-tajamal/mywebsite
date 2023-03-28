import './VideoPlayStyles.css'

import React from 'react'
import VideoPlayer from "react-background-video-player";

const VideoPlay = () => {
  return (
    <div className="video1">
      <VideoPlayer
        className="video"
        src={
          "https://res.cloudinary.com/dv7ollzw5/video/upload/v1619209051/Bloom_Alpha.webm"
        }
        autoPlay={true}
        muted={true}
      />
    </div>
  )
}

export default VideoPlay
