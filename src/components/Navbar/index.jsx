import React from 'react';
import * as S from './style';

function Navbar() {
  return (
    <S.NavContainer>
      <S.Navbar>
        <S.RightNav>
          <S.Logo to="/">Naetube</S.Logo>
        </S.RightNav>
        <S.LeftNav />
      </S.Navbar>
    </S.NavContainer>
  );
}

export default Navbar;
