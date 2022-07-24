import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 35rem;
  background-color: var(--color-indianred);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0;

  @media ${(props) => props.theme.phone} {
    height: 25rem;
    padding: 7rem 0;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;

  @media ${(props) => props.theme.phone} {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h5`
  margin-top: 2.5rem;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  @media ${(props) => props.theme.phone} {
    margin-top: 2rem;
    font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const Input = styled.input`
  width: 32rem;
  height: 3.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.25rem;
  line-height: 3.5rem;
  font-family: 'Nanum Gothic', sans-serif;
  padding: 0 1rem;

  &:focus-visible {
    outline: none;
  }

  @media ${(props) => props.theme.phone} {
    width: 16rem;
    height: 2.5rem;
    font-size: 0.9rem;
    line-height: 2.5rem;
  }
`;

export const Button = styled.button`
  margin-left: 1.5rem;
  padding: 0 30px;
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: inherit;
  cursor: pointer;
  color: rgba(30, 22, 54, 0.6);
  border-color: transparent;
  box-shadow: rgb(30 22 54 / 40%) 0 0px 0px 2px inset;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgb(30 22 54 / 70%) 0 0px 0px 40px inset;
  }

  @media ${(props) => props.theme.phone} {
    margin-left: 0.8rem;
    font-size: 0.8rem;
    padding: 0 15px;
  }
`;
