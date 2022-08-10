/* eslint-disable import/no-unresolved */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function NpChart({ data }) {
  const positivePercentage = Math.round(
    (data.positive.length / (data.positive.length + data.negative.length)) *
      100,
  );
  const negativePercentage = Math.round(
    (data.negative.length / (data.positive.length + data.negative.length)) *
      100,
  );

  const settings = {
    labels: [''],
    datasets: [
      {
        label: '긍정',
        data: [positivePercentage],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '부정',
        data: [negativePercentage],
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
