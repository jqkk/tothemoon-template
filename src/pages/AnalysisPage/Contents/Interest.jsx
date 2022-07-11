import React from 'react';
import { Layout, InterestChart } from '../../../components';
import styles from './Contents.module.css';

function Interest() {
  return (
    <Layout>
      <div className={styles.interest_container}>
        <InterestChart />
      </div>
    </Layout>
  );
}

export default Interest;
