import React from 'react';
import { Layout, EmotionChart, EmotionComments } from '../../../components';

function Emotion() {
  return (
    <Layout>
      <div>
        <EmotionChart />
        <EmotionComments />
      </div>
    </Layout>
  );
}

export default Emotion;
