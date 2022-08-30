import React, { useState } from 'react';
import styled from 'styled-components';
import { EmotionChart, TabContent } from '../../../components';
import { EmotionMock } from '../../../mock';

function Emotion() {
  const [comments, setComments] = useState(EmotionMock.happy);
  const navs = [
    {
      backgroundColor: 'rgb(153, 102, 255)',
      title: '공포',
      onClick: () => setComments(EmotionMock.fear),
      key: 0,
    },
    {
      backgroundColor: 'rgb(54, 162, 235)',
      title: '중립',
      onClick: () => setComments(EmotionMock.neutral),
      key: 1,
    },
    {
      backgroundColor: 'rgb(75, 192, 192)',
      title: '슬픔',
      onClick: () => setComments(EmotionMock.sadness),
      key: 2,
    },
    {
      backgroundColor: 'rgb(255, 205, 86)',
      title: '분노',
      onClick: () => setComments(EmotionMock.anger),
      key: 3,
    },
    {
      backgroundColor: 'rgb(255, 159, 64)',
      title: '놀람',
      onClick: () => setComments(EmotionMock.surprised),
      key: 4,
    },
    {
      backgroundColor: 'rgb(255, 99, 132)',
      title: '행복',
      onClick: () => setComments(EmotionMock.happy),
      key: 5,
    },
  ];
  return (
    <Container>
      <EmotionChart data={EmotionMock} />
      <TabContent navs={navs} comments={comments} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5rem;
`;

export default Emotion;
