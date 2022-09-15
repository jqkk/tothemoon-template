import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { EmotionChart, TabContent } from '../../../components';

function Emotion() {
  const data = useSelector((state) => state.analysis.comments);
  const [comments, setComments] = useState(
    data.filter((element) => element.index === '7'),
  );
  const navs = [
    {
      backgroundColor: 'rgb(188,143,143)',
      title: '혐오',
      onClick: () =>
        setComments(data.filter((element) => element.index === '8')),
      key: 0,
    },
    {
      backgroundColor: 'rgb(153, 102, 255)',
      title: '공포',
      onClick: () =>
        setComments(data.filter((element) => element.index === '2')),
      key: 1,
    },
    {
      backgroundColor: 'rgb(54, 162, 235)',
      title: '중립',
      onClick: () =>
        setComments(data.filter((element) => element.index === '6')),
      key: 2,
    },
    {
      backgroundColor: 'rgb(75, 192, 192)',
      title: '슬픔',
      onClick: () =>
        setComments(data.filter((element) => element.index === '5')),
      key: 3,
    },
    {
      backgroundColor: 'rgb(255, 205, 86)',
      title: '분노',
      onClick: () =>
        setComments(data.filter((element) => element.index === '4')),
      key: 4,
    },
    {
      backgroundColor: 'rgb(255, 159, 64)',
      title: '놀람',
      onClick: () =>
        setComments(data.filter((element) => element.index === '3')),
      key: 5,
    },
    {
      backgroundColor: 'rgb(255, 99, 132)',
      title: '행복',
      onClick: () =>
        setComments(data.filter((element) => element.index === '7')),
      key: 6,
    },
  ];
  return (
    <Container>
      <EmotionChart percent={data} />
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
