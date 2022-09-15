/* eslint-disable import/no-unresolved */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function EmotionChart({ percent }) {
  const settings = {
    labels: ['공포', '놀람', '분노', '슬픔', '중립', '행복', '혐오'],
    datasets: [
      {
        data: [
          percent.filter((element) => element.index === '17')[0].fearPercent,
          percent.filter((element) => element.index === '12')[0]
            .surprisedPercent,
          percent.filter((element) => element.index === '13')[0].angerPercent,
          percent.filter((element) => element.index === '14')[0].sadnessPercent,
          percent.filter((element) => element.index === '15')[0].neutralPercent,
          percent.filter((element) => element.index === '11')[0].happyPercent,
          percent.filter((element) => element.index === '16')[0].disgustPercent,
        ],
        backgroundColor: [
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(188,143,143)',
        ],
        hoverBackgroundColor: [
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(188,143,143)',
        ],
      },
    ],
  };
  return (
    <div>
      <Doughnut style={{ width: '400px', height: '400px' }} data={settings} />
    </div>
  );
}

export default EmotionChart;
