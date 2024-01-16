import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const bgChanger = useSelector((store) => store.transparentBg.bg);
  return (
    <div className={`flex ${bgChanger ? null : null}`}>
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
