import React from 'react';
import Youtube from 'react-youtube';
import styles from './Video.module.css';

function Video({ videoId }) {
  return (
    <Youtube
      videoId={videoId}
      className={styles.video_container}
      iframeClassName={styles.video}
    />
  );
}

export default Video;
