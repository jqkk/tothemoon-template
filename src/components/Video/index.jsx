import React from 'react';
import Youtube from 'react-youtube';
import styles from './Video.module.css';

function Video() {
  return (
    <Youtube
      videoId="dYRITmpFbJ4"
      className={styles.video_container}
      iframeClassName={styles.video}
    />
  );
}

export default Video;
