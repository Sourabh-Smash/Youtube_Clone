import React from "react";

const SideBar = () => {
  return (
    <div className="shadow-lg w-40 pt-2 ">
      <ul className="pl-5">
        <li className="font-semibold pt-4 cursor-pointer">Home</li>
        <li className="font-semibold pt-4 cursor-pointer">Shorts</li>
        <li className="font-semibold pt-4 cursor-pointer">Subscriptions</li>
      </ul>
      <div className="mt-5 ">
        <h2 className="font-bold text-xl pl-3 cursor-pointer">You</h2>
        <ul className="pl-5">
          <li className="font-semibold pt-2 cursor-pointer">History</li>
          <li className="font-semibold pt-4 cursor-pointer">Liked </li>
          <li className="font-semibold pt-4 cursor-pointer">Saved </li>
        </ul>
      </div>
      <div className="mt-5 ">
        <h2 className="font-bold text-xl pl-3 cursor-pointer">Explore</h2>
        <ul className="pl-5">
          <li className="font-semibold pt-2 cursor-pointer">Trending</li>
          <li className="font-semibold pt-4 cursor-pointer">Shopping </li>
          <li className="font-semibold pt-4 cursor-pointer">Music </li>
          <li className="font-semibold pt-4 cursor-pointer">Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
