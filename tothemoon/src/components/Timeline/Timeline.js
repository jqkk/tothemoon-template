import React from "react";

const Timeline = ({ children, href }) => {
  return (
    <div
      className="col border border-dark"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a href={href}>{children}</a>
    </div>
  );
};

export default Timeline;
