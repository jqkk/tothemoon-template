import React from 'react';
import * as S from './style';

function Navbar() {
  return (
    <S.Navbar>
      <S.RightNav>
        <S.Logo>Naetube</S.Logo>
      </S.RightNav>
      <S.LeftNav />
    </S.Navbar>
  );
}

export default Navbar;
