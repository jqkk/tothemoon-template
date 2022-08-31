import React from 'react';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import { SideBar } from '../../components';
import useMoveScroll from '../../hooks/useMoveScroll';
import { Home, Np, Emotion, Interest } from './Contents';

function AnalysisPage() {
  const params = useParams();
  const { url } = params;
  const tabs = [
    {
      ...useMoveScroll(),
      key: 0,
      title: 'HOME',
      content: <Home url={url} />,
    },
    {
      ...useMoveScroll(),
      key: 1,
      title: '댓글 긍정 부정 분석',
      content: <Np />,
      center: true,
    },
    {
      ...useMoveScroll(),
      key: 2,
      title: '댓글 감정 분석',
      content: <Emotion />,
      center: true,
    },
    {
      ...useMoveScroll(),
      key: 3,
      title: '댓글 관심도',
      content: <Interest />,
      center: true,
    },
  ];
  return (
    <>
      <SideBar elements={tabs} />
      <ContentContainer>
        {tabs.map((element) => (
          <Content
            key={element.key}
            ref={element.element}
            center={element.center}
          >
            {element.content}
          </Content>
        ))}
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  margin-left: 17rem;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: 100vh;
  ${(props) =>
    props.center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export default AnalysisPage;
