import React from 'react';
import { Layout, InterestChart } from '../../../components';
import styles from './Contents.module.css';

function Interest() {
  return (
    <Layout id="interest">
      <div className={styles.container}>
        <InterestChart />
      </div>
    </Layout>
  );
}

export default Interest;
