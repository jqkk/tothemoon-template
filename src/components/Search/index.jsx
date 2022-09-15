import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { requestGet } from '../../utils/httpClient';
import { BASE_URL, PATH } from '../../constants/api';
import * as S from './style';

function Search({ setPopUp }) {
  const url = useSelector((state) => state.analysis.url);
  const input = useRef();
  const onClick = async () => {
    // ?~~~&~~~
    // console.log(url);
    const keyword = input.current.value;
    const data = await requestGet(
      `${BASE_URL + PATH.SEARCH}?url=${url}&keyword=${keyword}`,
    );
    setPopUp({ title: keyword, comments: data, status: true });
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
