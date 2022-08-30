import React from 'react';
import * as S from './style';

function TabContent({ navs, comments }) {
  return (
    <S.Container>
      <S.Title>COMMENTS</S.Title>
      <S.Navbar>
        {navs.map((element) => (
          <S.Nav
            backgroundColor={element.backgroundColor}
            key={element.key}
            onClick={element.onClick}
          >
            {element.title}
          </S.Nav>
        ))}
      </S.Navbar>
      <S.HeaderTable>
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '60%' }} />
        </colgroup>
        <thead>
          <tr>
            <S.Th scope="col">작성자 아이디</S.Th>
            <S.Th scope="col">댓글</S.Th>
          </tr>
        </thead>
      </S.HeaderTable>
      <S.ScrollContainer>
        <S.ContentTable>
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '60%' }} />
          </colgroup>
          <tbody>
            {comments.map((element, index) => (
              <S.Tr key={index}>
                <S.Td>{element.writer}</S.Td>
                <S.Td>{element.comment}</S.Td>
              </S.Tr>
            ))}
          </tbody>
        </S.ContentTable>
      </S.ScrollContainer>
    </S.Container>
  );
}

export default TabContent;
