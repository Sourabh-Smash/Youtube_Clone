import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import SearchListVidoeContainer from "./SearchListVidoeContainer";

const Body = () => {
  return (
    <div className="flex  ">
      <SideBar />
      {/* <SearchListVidoeContainer/> */}
      <Outlet />
    </div>
  );
};

export default Body;
