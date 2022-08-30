import React, { useState } from 'react';
import styled from 'styled-components';
import { NpChart, TabContent } from '../../../components';
import { NpMock } from '../../../mock';

function Np() {
  const [comments, setComments] = useState(NpMock.positive);
  const navs = [
    {
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      title: '부정',
      onClick: () => setComments(NpMock.negative),
      key: 0,
    },
    {
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      title: '긍정',
      onClick: () => setComments(NpMock.positive),
      key: 1,
    },
  ];
  return (
    <Container>
      <NpChart data={NpMock} />
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
