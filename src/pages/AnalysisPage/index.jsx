import React from 'react';
import styled from 'styled-components';
import { SideBar } from '../../components';
import useMoveScroll from '../../hooks/useMoveScroll';

function AnalysisPage() {
  const tabs = [
    {
      ...useMoveScroll(),
      key: 0,
      title: 'HOME',
    },
    {
      ...useMoveScroll(),
      key: 1,
      title: '댓글 긍정 부정 분석',
    },
    {
      ...useMoveScroll(),
      key: 2,
      title: '댓글 감정 분석',
    },
    {
      ...useMoveScroll(),
      key: 3,
      title: '댓글 관심도',
    },
  ];
  return (
    <Container>
      <SideBar elements={tabs} />
      <ContentContainer>
        {tabs.map((element) => (
          <Content key={element.key} ref={element.element} />
        ))}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: 100vh;
`;

export default AnalysisPage;
