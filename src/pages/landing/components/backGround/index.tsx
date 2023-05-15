import React from "react";

export const BackGround = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        position: "relative",
        zIndex: "2",
      }}
    >
      <div className="d-flex flex-column align-items-center">
        <div
          style={{
            width: "100vw",
            height: "200px",
          }}
        ></div>
      </div>
    </div>
  );
};
