import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 17rem;
  height: 100vh;
  background-color: var(--color-indianred);
  position: fixed;
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.div`
  color: white;
  font-weight: 800;
  letter-spacing: 0.05rem;
  margin: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  line-height: 1.5;
  background-color: ${(props) =>
    props.clicked ? 'rgb(var(--color-shallow-indianred))' : 'inherit'};
`;

export const Href = styled.a`
  color: white;
  font-weight: 800;
  letter-spacing: 0.05rem;
  margin: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  line-height: 1.5;
  background-color: ${(props) =>
    props.clicked ? 'rgb(var(--color-shallow-indianred))' : 'inherit'};
`;
