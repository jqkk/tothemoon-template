import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 120px;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 0.5rem;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem 0;
  gap: 5px;
`;

export const Nav = styled.div`
  border-radius: 10px;
  color: white;
  padding: 0.8rem 1rem;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  display: block;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
`;

export const ScrollContainer = styled.div`
  height: 400px;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #292424;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(128, 128, 128, 0.219);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const HeaderTable = styled.table`
  width: 100%;
  margin-top: 30px;
  color: #6c757d;
`;

export const Th = styled.th`
  font-size: 20px;
  font-weight: bold;
  text-align: initial;
`;

export const ContentTable = styled.table`
  width: 100%;
  color: #6c757d;
`;

export const Tr = styled.tr`
  height: 110px;
`;

export const Td = styled.td`
  border-bottom: 0.5px solid #6c757d;
  padding-top: 45px;
  padding-bottom: 10px;
`;
