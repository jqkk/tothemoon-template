import React from 'react';
import * as S from './style';
import Video from '../Video';
import VideoInfo from '../VideoInfo';

function VideoContainer() {
  return (
    <S.Container>
      <S.VideoContainer>
        <Video videoId="7bs9-VU8uHI" />
      </S.VideoContainer>
      <S.InfoContainer>
        <VideoInfo />
      </S.InfoContainer>
    </S.Container>
  );
}

export default VideoContainer;
