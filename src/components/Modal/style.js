import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const ModalWindow = styled.div`
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 700px;
  height: 600px;
  position: relative;
  top: -100px;
  padding: 10px;
  overflow: auto;
`;

export const Header = styled.div`
  padding-left: 20px;
  border-radius: 10px;
  color: white;
  background: var(--color-indianred);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: white;
  font-size: 40px;
`;

export const Close = styled.div`
  height: 100%;
  padding-right: 10px;
  padding-top: 10px;
  cursor: pointer;
  text-shadow: 1px 1px 2px gray;
  color: white;
`;

export const Content = styled.div`
  margin-top: 20px;
  padding: 0px 10px;
  color: black;
`;

export const Comment = styled.p`
  margin: 25px;
`;
