import React from 'react';
import styled from 'styled-components';
import { VideoContainer, DropDown } from '../../../components';

function Home() {
  return (
    <>
      <HeaderContainer>
        <SearchContainer>Hello</SearchContainer>
        <DropDownContainer>
          <DropDown />
        </DropDownContainer>
      </HeaderContainer>
      <VideoContainer />
    </>
  );
}

export default Home;

const HeaderContainer = styled.div`
  width: 100%;
  margin: 1rem;
  display: flex;
  height: 60px;
`;

const SearchContainer = styled.div`
  height: 60px;
  width: 75%;
  margin-right: 25px;
  color: var(--color-indianred);
  border: solid;
`;

const DropDownContainer = styled.div`
  width: 20%;
`;
