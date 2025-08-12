import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Mpplayer = () => {

  return (
    <div className='mp3-container'
    >
      <h3>Forevermore</h3>
      <p>By Side A</p>
      <AudioPlayer
        className='wedding-mp3'
        autoPlay
        src={process.env.PUBLIC_URL + '/mp3/forevermore.mp3'}
        preload='auto'
        // other props here
      />
    </div>
  )
};


export default Mpplayer