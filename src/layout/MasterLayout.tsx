import { Outlet } from "react-router-dom";
import "./index.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import React from "react";
export const MasterLayout = () => {
  return (
    <>
      <Header />
      {/* <div className="slider-wrapper">
        <Slider />
      </div> */}

      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};


