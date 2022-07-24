import React from 'react';
import styled from 'styled-components';
import { Navbar, SearchContainer, Intro } from '../../components';

const contents = [
  {
    key: 1,
    image: 'bi-clipboard-minus',
    title: '타임라인과 키워드',
    detail: '해당 영상의 주요 타임라인과 베스트 키워드를 조회할 수 있습니다',
  },
  {
    key: 2,
    image: 'bi-bar-chart-line',
    title: '댓글 긍정 부정 분류',
    detail: '긍정 댓글과 부정 댓글의 비율을 확인할 수 있습니다',
  },
  {
    key: 3,
    image: 'bi-pie-chart',
    title: '댓글 감정 분석',
    detail: '도넛 차트를 통해 댓글의 7가지 감정 비율을 확인할 수 있습니다',
  },
];

function EntryPage() {
  return (
    <>
      <Navbar />
      <SearchContainer />
      <IntroContainer>
        {contents.map(({ image, title, detail, key }) => (
          <Intro image={image} title={title} detail={detail} key={key} />
        ))}
      </IntroContainer>
    </>
  );
}

const IntroContainer = styled.div`
  display: flex;
  height: 33rem;
  padding: 5rem 0;
  max-width: 75rem;
  margin: 0 auto;

  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    height: auto;
    gap: 3rem;
  }
`;

export default EntryPage;
