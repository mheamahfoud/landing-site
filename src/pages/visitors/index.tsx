import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";

export const VisitorInfo: FC = () => {
  const location = useLocation();
  const { url } = location.state;
  return (
    <div>
      {" "}
      <Header url={url} />
      <div
        className="d-flex justify-content-center"
        style={{
          position: "relative",
          background: "white",
          zIndex: "2",
        }}
      >
    
      </div>
    </div>
  );
};
