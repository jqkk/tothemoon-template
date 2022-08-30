import React from 'react';
import styled from 'styled-components';
import { VideoContainer } from '../../../components';

function Home() {
  return (
    <>
      <HeaderContainer>
        <Search />
        <DropDownContainer>
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
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

const Search = styled.div`
  height: 60px;
  width: 75%;
  margin-right: 25px;
  background-color: green;
`;

const DropDownContainer = styled.div`
  width: 20%;
  background-color: skyblue;
  position: relative;
`;

const DropDown = styled.div`
  height: 60px;
  background-color: blue;
`;
