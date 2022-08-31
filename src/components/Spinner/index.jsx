import React from 'react';
import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div
      style={{ position: 'absolute', left: '0', right: '0' }}
      className={styles.bodyLoading}
    >
      <div
        className={[styles.loadingContainer, styles.containerLoading].join(' ')}
      >
        <div className={styles.loading} />
        <div className={styles.loadingText}>loading</div>

        <div style={{ marginTop: '30px' }} className={styles.link}>
          분석중입니다...
        </div>
      </div>
    </div>
  );
}

export default Spinner;
