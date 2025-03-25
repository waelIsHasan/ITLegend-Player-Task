import poster from './poster.png'
import './VideoPlayer.css'
export default function VideoPlayer({ videoId }) {
    return (
        <video 
        controls
        poster={poster}
      >
        <source src="/path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }