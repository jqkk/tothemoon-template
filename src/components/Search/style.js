import styled from 'styled-components';

export const Input = styled.input`
  height: 100%;
  width: 90%;
  color: #6c757d;
  border: solid 3px var(--color-indianred);
  margin-right: 5px;
  font-size: 20px;
  padding: 10px;

  &:focus-visible {
    outline: none;
  }
`;

export const Btn = styled.button`
  flex: 1;
  border: none;
  background-color: var(--color-indianred);
  cursor: pointer;
  color: white;
  font-size: 23px;
`;
