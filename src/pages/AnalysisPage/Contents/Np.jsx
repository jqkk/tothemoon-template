import React from 'react';
import styles from './Contents.module.css';
import { Layout, NpChart, NpComments } from '../../../components';
import { NpMock } from '../../../mock';

function Np() {
  return (
    <Layout id="np">
      <div className={styles.container}>
        <NpChart data={NpMock} />
        <NpComments data={NpMock} />
      </div>
    </Layout>
  );
}

export default Np;
