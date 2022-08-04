/* eslint-disable import/no-unresolved */
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function EmotionChart({ data }) {
  const fearPercentage = `${Math.round(
    (data.fear.length /
      (data.fear.length +
        data.surprised.length +
        data.anger.length +
        data.anger.length +
        data.sadness.length +
        data.neutral.length +
        data.happy.length +
        data.disgust.length)) *
      100,
  )}`;

  const surprisedPercentage = `${Math.round(
    (data.surprised.length /
      (data.fear.length +
        data.surprised.length +
        data.anger.length +
        data.sadness.length +
        data.neutral.length +
        data.happy.length +
        data.disgust.length)) *
      100,
  )}`;

  const angerPercentage = `${Math.round(
    (data.anger.length /
      (data.fear.length +
        data.surprised.length +
        data.anger.length +
        data.sadness.length +
        data.neutral.length +
        data.happy.length +
        data.disgust.length)) *
      100,
  )}`;

  const sadnessPercentage = `${Math.round(
    (data.sadness.length /
      (data.fear.length +
        data.surprised.length +
        data.anger.length +
        data.sadness.length +
        data.neutral.length +
        data.happy.length +
        data.disgust.length)) *
      100,
  )}`;

  const neutralPercentage = `${Math.round(
    (data.neutral.length /
      (data.fear.length +
        data.surprised.length +
        data.anger.length +
        data.sadness.length +
        data.neutral.length +
        data.happy.length +
        data.disgust.length)) *
      100,
  )}`;

  const happyPercentage = `${Math.round(
    (data.anger.length /
      (data.fear.length +
        data.surprised.length +
        data.anger.length +
        data.sadness.length +
        data.neutral.length +
        data.happy.length +
        data.disgust.length)) *
      100,
  )}`;

  const disgustPercentage = `${Math.round(
    (data.anger.length /
      (data.fear.length +
        data.surprised.length +
        data.anger.length +
        data.sadness.length +
        data.neutral.length +
        data.happy.length +
        data.disgust.length)) *
      100,
  )}`;

  const settings = {
    labels: ['공포', '놀람', '분노', '슬픔', '중립', '행복', '혐오'],
    datasets: [
      {
        data: [
          fearPercentage,
          surprisedPercentage,
          angerPercentage,
          sadnessPercentage,
          neutralPercentage,
          happyPercentage,
          disgustPercentage,
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
    <Doughnut style={{ width: '400px', height: '400px' }} data={settings} />
  );
}

export default EmotionChart;
