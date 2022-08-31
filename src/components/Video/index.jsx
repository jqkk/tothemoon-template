import React from 'react';
import Youtube from 'react-youtube';
import styles from './Video.module.css';

function Video({ videoId, setPlayer }) {
  const onReady = (e) => {
    setPlayer(e.target);
  };
  return (
    <Youtube
      videoId={videoId}
      className={styles.video_container}
      iframeClassName={styles.video}
      onReady={onReady}
    />
  );
}

export default Video;
