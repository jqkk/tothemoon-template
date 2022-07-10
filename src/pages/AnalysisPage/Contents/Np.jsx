import React from 'react';
import { Layout, NpChart, NpComments } from '../../../components';

function Np() {
  return (
    <Layout>
      <div>
        <NpChart />
        <NpComments />
      </div>
    </Layout>
  );
}

export default Np;
