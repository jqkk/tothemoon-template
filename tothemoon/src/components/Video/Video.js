import React from "react";
import Youtube from "react-youtube";
import "./Video.css";

const Video = ({ videoId }) => {
  const options = {
    // width: 1000,
  };
  return (
    <Youtube videoId={videoId} containerClassName="video" opts={options} />
  );
};

export default Video;
