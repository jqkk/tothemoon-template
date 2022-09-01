import React, { useState } from 'react';
import * as S from './style';
import Video from '../Video';
import VideoInfo from '../VideoInfo';

function VideoContainer({ videoId, datasets }) {
  const [player, setPlayer] = useState();
  return (
    <S.Container>
      <S.VideoContainer>
        <Video videoId={videoId} setPlayer={setPlayer} />
      </S.VideoContainer>
      <S.InfoContainer>
        <VideoInfo
          player={player}
          videoInfo={datasets.videoInfo}
          timelines={datasets.timelines}
        />
      </S.InfoContainer>
    </S.Container>
  );
}

export default VideoContainer;
