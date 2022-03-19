import React from "react";
import Timeline from "../Timeline/Timeline";
import Video from "../Video/Video";

const Home = () => {
  return (
    <section
      className="resume-section"
      style={{ display: "block", alignItems: "stretch", padding: "2rem" }}
      id="home"
    >
      <div className="resume-section-content" style={{ height: "100vh" }}>
        <div className="row" style={{ height: "10%", padding: "1rem" }}>
          <div
            className="col-9"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="input-group" style={{ height: "90%" }}>
              <input
                type="search"
                className="form-control rounded"
                placeholder="검색할 댓글을 입력하세요!"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-outline-primary">
                검색
              </button>
            </div>
          </div>
          <div
            className="col-3 border border-dark"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            베스트 키워드
          </div>
        </div>
        <div className="row h-75">
          <Video videoId="y9kkXTucnLU" />
        </div>

        <div
          className="row"
          style={{
            height: "10%",
            padding: "1rem",
          }}
        >
          <div
            className="col border border-dark"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            인기 타임라인
          </div>
          <Timeline href="#hello">00:00:00</Timeline>
          <Timeline href="#hello">00:00:00</Timeline>
          <Timeline href="#hello">00:00:00</Timeline>
          <Timeline href="#hello">00:00:00</Timeline>
          <Timeline href="#hello">00:00:00</Timeline>
        </div>
      </div>
    </section>
  );
};

export default Home;
