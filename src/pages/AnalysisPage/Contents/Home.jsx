import React, { useState } from 'react';
import styled from 'styled-components';
import { VideoContainer, DropDown, Search, Modal } from '../../../components';

function Home({ url }) {
  const [popUp, setPopUp] = useState({
    status: false,
    title: '',
    comments: [],
  });

  return (
    <>
      <HeaderContainer>
        <SearchContainer>
          <Search setPopUp={setPopUp} />
        </SearchContainer>
        <DropDownContainer>
          <DropDown setPopUp={setPopUp} />
        </DropDownContainer>
      </HeaderContainer>
      <VideoContainer videoId={url} />
      <Modal popUp={popUp} setPopUp={setPopUp} />
    </>
  );
}

export default Home;

const HeaderContainer = styled.div`
  margin: 1rem;
  display: flex;
  height: 60px;
`;

const SearchContainer = styled.div`
  height: 60px;
  width: 75%;
  margin-right: 25px;
  display: flex;
`;

const DropDownContainer = styled.div`
  width: 20%;
`;
