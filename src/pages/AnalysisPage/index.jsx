import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Home, Np, Emotion, Interest } from './Contents';

function AnalysisPage() {
  const { url } = useParams();
  const [clickedMenuTab, setClickedMenuTab] = useState(0);
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">ToTheMoon</span>
            <span className="d-none d-lg-block">
              {/* <img
                  className="img-fluid img-profile rounded-circle mx-auto mb-2"
                  src="assets/logo.png"
                  alt="..."
                /> */}
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              {clickedMenuTab === 1 ? (
                <li
                  style={{
                    backgroundColor: 'rgb(250,128,114)',
                    margin: '10px',
                  }}
                  onClick={() => {
                    setClickedMenuTab(1);
                  }}
                  className="nav-item"
                >
                  <a
                    style={{ color: 'white', fontFamily: 'NanumGothic' }}
                    className="nav-link js-scroll-trigger"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
              ) : (
                <li
                  style={{ margin: '10px' }}
                  className="nav-item"
                  onClick={() => {
                    setClickedMenuTab(1);
                  }}
                >
                  <a
                    style={{ color: 'white', fontFamily: 'NanumGothic' }}
                    className="nav-link js-scroll-trigger"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
              )}
              {clickedMenuTab === 2 ? (
                <li
                  style={{
                    backgroundColor: 'rgb(250,128,114)',
                    margin: '10px',
                  }}
                  className="nav-item"
                  onClick={() => {
                    setClickedMenuTab(2);
                  }}
                >
                  <a
                    style={{ color: 'white', fontFamily: 'NanumGothic' }}
                    className="nav-link js-scroll-trigger"
                    href="#np"
                  >
                    댓글 긍정 부정 분석
                  </a>
                </li>
              ) : (
                <li
                  style={{ margin: '10px' }}
                  className="nav-item"
                  onClick={() => {
                    setClickedMenuTab(2);
                  }}
                >
                  <a
                    style={{ color: 'white', fontFamily: 'NanumGothic' }}
                    className="nav-link js-scroll-trigger"
                    href="#np"
                  >
                    댓글 긍정 부정 분석
                  </a>
                </li>
              )}
              {clickedMenuTab === 3 ? (
                <li
                  style={{
                    backgroundColor: 'rgb(250,128,114)',
                    margin: '10px',
                  }}
                  className="nav-item"
                  onClick={() => {
                    setClickedMenuTab(3);
                  }}
                >
                  <a
                    style={{ color: 'white', fontFamily: 'NanumGothic' }}
                    className="nav-link js-scroll-trigger"
                    href="#emotion"
                  >
                    댓글 감정 분석
                  </a>
                </li>
              ) : (
                <li
                  style={{ margin: '10px' }}
                  className="nav-item"
                  onClick={() => {
                    setClickedMenuTab(3);
                  }}
                >
                  <a
                    style={{ color: 'white', fontFamily: 'NanumGothic' }}
                    className="nav-link js-scroll-trigger"
                    href="#emotion"
                  >
                    댓글 감정 분석
                  </a>
                </li>
              )}
              {clickedMenuTab === 4 ? (
                <li
                  style={{
                    backgroundColor: 'rgb(250,128,114)',
                    margin: '10px',
                  }}
                  className="nav-item"
                  onClick={() => {
                    setClickedMenuTab(4);
                  }}
                >
                  <a
                    style={{ color: 'white', fontFamily: 'NanumGothic' }}
                    className="nav-link js-scroll-trigger"
                    href="#interest"
                  >
                    댓글 관심도
                  </a>
                </li>
              ) : (
                <li
                  style={{ margin: '10px' }}
                  className="nav-item"
                  onClick={() => {
                    setClickedMenuTab(4);
                  }}
                >
                  <a
                    style={{ color: 'white', fontFamily: 'NanumGothic' }}
                    className="nav-link js-scroll-trigger"
                    href="#interest"
                  >
                    댓글 관심도
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid" style={{ paddingLeft: '17rem' }}>
        <Home url={url} />
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
