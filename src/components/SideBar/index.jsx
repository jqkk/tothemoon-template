import React, { useState, useEffect } from 'react';
import { BASE_URL, PATH } from '../../constants/api';
import * as S from './style';

function SideBar({ elements }) {
  const [state, setState] = useState(0);

  const handleScroll = () => {
    const vh = window.scrollY * (100 / document.documentElement.clientHeight);
    setState(parseInt(vh / 100, 10));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });
  return (
    <S.NavBar>
      <S.NavContainer>
        {elements.map((element) => {
          const onClick = () => {
            element.onMoveToElement();
          };
          return (
            <S.Nav
              key={element.key}
              onClick={onClick}
              clicked={state === element.key}
            >
              {element.title}
            </S.Nav>
          );
        })}
        <S.Href href={`${BASE_URL}${PATH.RECORD}`}>분석 결과 저장</S.Href>
        <S.Href href={`${BASE_URL}${PATH.MYPAGE}`}>My Page</S.Href>
      </S.NavContainer>
    </S.NavBar>
  );
}

export default SideBar;
