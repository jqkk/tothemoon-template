import React from 'react';
import * as S from './style';

function Intro({ image, title, detail }) {
  return (
    <S.Intro>
      <S.Image>
        <i className={`${image} img`} />
      </S.Image>
      <S.Title>{title}</S.Title>
      <S.Detail>{detail}</S.Detail>
    </S.Intro>
  );
}

export default Intro;
