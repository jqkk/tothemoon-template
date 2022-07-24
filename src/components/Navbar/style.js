import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  background-color: rgba(var(--bs-light-rgb), 1);
`;

export const Navbar = styled.nav`
  max-width: 90rem;
  margin: auto;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    max-width: 40rem;
  }

  @media ${(props) => props.theme.phone} {
    padding: 0 20px;
  }
`;

export const LeftNav = styled.div`
  display: flex;
`;

export const RightNav = styled.div`
  display: flex;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 400;
`;
