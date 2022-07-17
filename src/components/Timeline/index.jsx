import React from 'react';
import styles from './Timeline.module.css';
import TimelineItem from './TimelineItem';
import { TimelineMock as timeline } from '../../mock';

function Timeline() {
  return (
    <>
      <span
        className={styles.timeline}
        style={{ backgroundColor: 'rgb(189,93,56)' }}
      >
        인기 타임라인
      </span>
      {timeline.map((cur, index) => (
        <TimelineItem key={index} count={cur.count}>
          {cur.label}
        </TimelineItem>
      ))}
    </>
  );
}

export default Timeline;
