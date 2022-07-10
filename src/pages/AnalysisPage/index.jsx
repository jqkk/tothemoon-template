import React from 'react';
import { Home, Np, Emotion, Interest } from './Contents';

function AnalysisPage() {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-primary fixed-top"
          id="sideNav"
        />
      </div>
      <div className="container-fluid" style={{ paddingLeft: '17rem' }}>
        <Home />
        <hr className="m-0" />
        <Np />
        <hr className="m-0" />
        <Emotion />
        <hr className="m-0" />
        <Interest />
        <hr className="m-0" />
      </div>
    </>
  );
}

export default AnalysisPage;
