import React, { FC } from "react";
import { HeaderDubbing } from "./components/HeaderDubbing";
import { useLocation } from "react-router-dom";
import { CardList } from "./components/CardList";
export const DubbingAlbum: FC = () => {
  const location = useLocation();
  const { url } = location.state;
  return (
    <div>
      {" "}
      <HeaderDubbing url={url} />
      <div
        className="d-flex justify-content-center"
        style={{
          position: "relative",
          background: "white",
          zIndex: "2",
        }}
      >
        <CardList />
      </div>
    </div>
  );
};
