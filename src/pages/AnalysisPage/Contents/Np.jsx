import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NpChart, TabContent } from '../../../components';

function Np() {
  const data = useSelector((state) => state.analysis.comments);
  const [comments, setComments] = useState(
    data.filter((element) => element.index === '1'),
  );
  const navs = [
    {
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      title: '부정',
      onClick: () =>
        setComments(data.filter((element) => element.index === '0')),
      key: 0,
    },
    {
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      title: '긍정',
      onClick: () =>
        setComments(data.filter((element) => element.index === '1')),
      key: 1,
    },
  ];
  return (
    <Container>
      <NpChart percent={data} />
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

export default Np;
