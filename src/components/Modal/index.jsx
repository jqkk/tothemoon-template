import React, { useEffect } from 'react';
import * as S from './style';

function Modal({ setPopUp, popUp }) {
  useEffect(() => {
    if (popUp.status === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [popUp]);
  const onClick = () => {
    setPopUp({
      status: false,
      title: '',
      comments: [],
    });
  };
  return popUp.status ? (
    <S.ModalOverlay>
      <S.ModalWindow>
        <S.Header>
          <S.Title>{popUp.title}</S.Title>
          <S.Close onClick={onClick}>X</S.Close>
        </S.Header>
        <S.Content>
          {popUp.comments.map((cur, index) => (
            <div key={index}>
              <S.Comment dangerouslySetInnerHTML={{ __html: cur }} />
              <hr />
            </div>
          ))}
        </S.Content>
      </S.ModalWindow>
    </S.ModalOverlay>
  ) : null;
}

export default Modal;
