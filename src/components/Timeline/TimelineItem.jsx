import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './Timeline.module.css';

function TimelineItem({ children, count }) {
  return (
    <>
      <span className={styles.timeline} data-tip={count}>
        {children}
      </span>
      <ReactTooltip />
    </>
  );
}

export default TimelineItem;
