import React from 'react';
import * as S from './style';
import { BASE_URL, PATH } from '../../constants/api';

function Navbar() {
  return (
    <S.NavContainer>
      <S.Navbar>
        <S.RightNav>
          <S.Logo to="/">Naetube</S.Logo>
        </S.RightNav>
        <S.LeftNav>
          <S.Href href={`${BASE_URL}${PATH.MYPAGE}`}>mypage</S.Href>
        </S.LeftNav>
      </S.Navbar>
    </S.NavContainer>
  );
}

export default Navbar;
