import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import TextLoop from 'react-text-loop';
import * as S from './style';
import styles from './DropDown.module.css';
import { KeywordMock } from '../../mock';

function DropDown() {
  const data = KeywordMock;
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen((cur) => !cur);
  };
  return (
    <S.Container>
      <S.DropDownLayer>
        <S.Upper>
          {data.length !== 0 ? (
            <TextLoop className={styles.textLoop}>
              {data.map((cur, index) => (
                <span key={index} className={styles.loopContent}>
                  {`${index + 1}. ${cur}`}
                </span>
              ))}
            </TextLoop>
          ) : (
            <div className={styles.textLoop} />
          )}
          <S.Btn onClick={onClick}>
            {open ? (
              <AiOutlineCaretUp size="40" />
            ) : (
              <AiOutlineCaretDown size="40" />
            )}
          </S.Btn>
        </S.Upper>
      </S.DropDownLayer>
      {open
        ? data.map((cur, index) => (
            <S.DropDownLayer key={index}>
              <S.DropDownContent>
                <S.Text>{`${index + 1}. ${cur}`}</S.Text>
              </S.DropDownContent>
            </S.DropDownLayer>
          ))
        : null}
    </S.Container>
  );
}

export default DropDown;
