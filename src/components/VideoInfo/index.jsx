import React from 'react';
import * as S from './style';
import Timeline from '../Timeline';

function VideoInfo({ player, videoInfo, timelines }) {
  const clickfunc = (param) => {
    return () => {
      player.seekTo(param);
    };
  };
  return (
    <S.Container>
      <S.Title>{videoInfo.title}</S.Title>
      <S.Hr />
      <S.DetailContainer>
        <S.Detail>{`조회수: ${videoInfo.view}회`}</S.Detail>
        <S.Detail>{`좋아요 수: ${videoInfo.like}개`}</S.Detail>
        <S.Detail>{`업로드 날짜: ${videoInfo.date}`}</S.Detail>
      </S.DetailContainer>
      <S.TimelineContainer>
        <Timeline title="true">인기 타임라인</Timeline>
        {timelines.map((element, key) => (
          <Timeline
            key={key}
            clickfunc={clickfunc(element.sec)}
            count={element.count}
          >
            {element.label}
          </Timeline>
        ))}
      </S.TimelineContainer>
    </S.Container>
  );
}

export default VideoInfo;
