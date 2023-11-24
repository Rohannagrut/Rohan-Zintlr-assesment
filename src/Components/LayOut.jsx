import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarTop from "./NavBarTop";

const LayOut = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex-1">
        <NavBarTop />
        <Outlet />
      </div>
    </div>
  );
};

export default LayOut;
