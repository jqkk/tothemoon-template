import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import TextLoop from 'react-text-loop';
import styles from './DropDown.module.css';
import { KeywordMock } from '../../mock';

function DropDown() {
  const data = KeywordMock;
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen((cur) => !cur);
  };
  return (
    <div
      style={{
        width: '16rem',
        hegiht: '100%',
        display: 'flex',
        marginLeft: '1rem',
        flexDirection: 'column',
        position: 'absolute',
        border: 'solid',
      }}
    >
      <div
        style={{
          height: '60px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
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
        <div
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onClick}
        >
          {open ? (
            <AiOutlineCaretUp size="40" />
          ) : (
            <AiOutlineCaretDown size="40" />
          )}
        </div>
      </div>
      {open
        ? data.map((cur, index) => (
            <div
              style={{ height: '60px', display: 'flex', alignItems: 'center' }}
              key={index}
            >
              <p
                style={{
                  margin: 0,
                  paddingLeft: '2.5rem',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                }}
              >
                {`${index + 1}. ${cur}`}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}

export default DropDown;
