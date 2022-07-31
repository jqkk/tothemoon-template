import React, { useState } from 'react';
import * as S from './style';

function SideBar({ elements }) {
  const [state, setState] = useState(0);
  return (
    <S.NavBar>
      <S.NavContainer>
        {elements.map((element) => {
          const onClick = () => {
            setState(element.key);
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
      </S.NavContainer>
    </S.NavBar>
  );
}

export default SideBar;
