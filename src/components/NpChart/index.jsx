/* eslint-disable import/no-unresolved */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function NpChart({ percent }) {
  const settings = {
    labels: [''],
    datasets: [
      {
        label: '긍정',
        data: [percent.positive],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '부정',
        data: [percent.negative],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
  return (
    <div>
      <Bar width="400" height="500" data={settings} options={options} />
    </div>
  );
}

export default NpChart;
