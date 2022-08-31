import React, { useState } from 'react';
import * as S from './style';
import Video from '../Video';
import VideoInfo from '../VideoInfo';

function VideoContainer({ videoId }) {
  const [player, setPlayer] = useState();
  return (
    <S.Container>
      <S.VideoContainer>
        <Video videoId={videoId} setPlayer={setPlayer} />
      </S.VideoContainer>
      <S.InfoContainer>
        <VideoInfo player={player} />
      </S.InfoContainer>
    </S.Container>
  );
}

export default VideoContainer;
