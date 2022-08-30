import React from 'react';
import * as S from './style';
import Timeline from '../Timeline';
import { VideoInfoMock, TimelineMock } from '../../mock';

function VideoInfo() {
  return (
    <S.Container>
      <S.Title>{VideoInfoMock.title}</S.Title>
      <S.Hr />
      <S.DetailContainer>
        <S.Detail>{`조회수: ${VideoInfoMock.view}회`}</S.Detail>
        <S.Detail>{`좋아요 수: ${VideoInfoMock.like}개`}</S.Detail>
        <S.Detail>{`업로드 날짜: ${VideoInfoMock.date}`}</S.Detail>
      </S.DetailContainer>
      <S.TimelineContainer>
        <Timeline title="true">인기 타임라인</Timeline>
        {TimelineMock.map((element, key) => (
          <Timeline key={key}>{element.label}</Timeline>
        ))}
      </S.TimelineContainer>
    </S.Container>
  );
}

export default VideoInfo;
