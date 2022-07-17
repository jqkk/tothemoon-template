import React from 'react';
import styles from './NpChart.module.css';

function NpChart({ data }) {
  const positivePercentage = `${Math.round(
    (data.positive.length / (data.positive.length + data.negative.length)) *
      100,
  )}%`;
  const negativePercentage = `${Math.round(
    (data.negative.length / (data.positive.length + data.negative.length)) *
      100,
  )}%`;
  return (
    <div>
      <section className={styles.graph_section}>
        <div className={[styles.graph, styles.stack1].join(' ')}>
          <span style={{ height: positivePercentage }}>
            {positivePercentage}
          </span>
        </div>
        <div className={[styles.graph, styles.stack2].join(' ')}>
          <span style={{ height: negativePercentage }}>
            {negativePercentage}
          </span>
        </div>
      </section>
      <div>
        <span style={{ display: 'flex' }}>
          <section className={styles.description_positive} />
          <p className={styles.description_font}>긍정 댓글 비율</p>
        </span>
        <span style={{ display: 'flex' }}>
          <section className={styles.description_negative} />
          <p className={styles.description_font}>부정 댓글 비율</p>
        </span>
      </div>
    </div>
  );
}

export default NpChart;
