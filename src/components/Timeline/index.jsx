import React from 'react';
import styled, { css } from 'styled-components';
import ReactTooltip from 'react-tooltip';

function Timeline({ children, title, clickfunc, count }) {
  return title === 'true' ? (
    <Rounded title={title}>{children}</Rounded>
  ) : (
    <>
      <Rounded title={title} onClick={clickfunc} data-tip={count}>
        {children}
      </Rounded>
      <ReactTooltip />
    </>
  );
}

const Rounded = styled.div`
  display: inline-block;
  line-height: 18px;
  height: 20px;
  font-size: 15px;
  border-radius: 11px;
  padding: 2px 8px;
  color: #ffffff;
  margin-top: 10px;
  background-color: var(--color-indianred);
  margin-right: 8px;

  ${(props) =>
    !(props.title === 'true') &&
    css`
      cursor: pointer;
      background-color: #6c757d;
      &:hover {
        background-color: var(--color-indianred);
      }
    `}
`;

export default Timeline;
