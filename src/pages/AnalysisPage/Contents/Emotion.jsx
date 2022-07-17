import React from 'react';
import styles from './Contents.module.css';
import { Layout, EmotionChart, EmotionComments } from '../../../components';
import { EmotionMock } from '../../../mock';

function Emotion() {
  return (
    <Layout id="emotion">
      <div className={styles.container}>
        <EmotionChart data={EmotionMock} />
        <EmotionComments data={EmotionMock} />
      </div>
    </Layout>
  );
}

export default Emotion;
