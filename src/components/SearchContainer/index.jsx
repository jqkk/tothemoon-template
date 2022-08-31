import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

function SearchContainer() {
  const navigate = useNavigate();
  const input = useRef();
  const onClick = () => {
    // const videoId = new URL(input.current.value).pathname;
    const url = `/analysis/js1CtxSY38I`;
    navigate(url);
  };
  return (
    <S.Container>
      <S.Title>
        손쉽게 유튜브 영상을 <br />
        분석해보세요!
      </S.Title>
      <S.Subtitle>해당 영상의 URL을 통해 확인하실 수 있습니다</S.Subtitle>
      <S.InputContainer>
        <S.Input placeholder="유튜브 영상의 URL을 입력해주세요" ref={input} />
        <S.Button onClick={onClick}>분석</S.Button>
      </S.InputContainer>
    </S.Container>
  );
}

export default SearchContainer;
