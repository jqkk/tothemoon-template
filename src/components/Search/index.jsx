import React, { useRef } from 'react';
import * as S from './style';
import { SearchMock } from '../../mock';

function Search({ setPopUp }) {
  const input = useRef();
  const onClick = () => {
    const keyword = input.current.value;
    setPopUp({ title: keyword, comments: SearchMock, status: true });
  };
  return (
    <>
      <S.Input placeholder="검색할 댓글을 입력하세요!" ref={input} />
      <S.Btn type="button" onClick={onClick}>
        검색
      </S.Btn>
    </>
  );
}

export default Search;
