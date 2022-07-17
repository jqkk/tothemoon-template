import React from 'react';
import styles from './VideoInfo.module.css';
import Timeline from '../Timeline';
import { VideoInfoMock as videoInfo } from '../../mock';

function VideoInfo() {
  const text = `조회수 : ${videoInfo.view}회\t\t\t좋아요 수 : ${videoInfo.like}개\t\t\t업로드날짜 : ${videoInfo.date}`;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>{videoInfo.title}</p>
        <hr />
        <pre className={styles.text}>{text}</pre>
        <Timeline />
      </div>
    </div>
  );
}

export default VideoInfo;
