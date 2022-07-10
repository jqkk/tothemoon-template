import React from 'react';
import {
  Layout,
  Search,
  DropDown,
  Video,
  VideoInfo,
} from '../../../components';

function Home() {
  return (
    <Layout>
      <div className="row">
        <div className="col-9">
          <Search />
        </div>
        <div className="col-3">
          <DropDown />
        </div>
      </div>
      <div className="row h-50">
        <Video />
      </div>
      <div className="row">
        <VideoInfo />
      </div>
    </Layout>
  );
}

export default Home;
