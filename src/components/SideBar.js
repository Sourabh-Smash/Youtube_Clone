import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-40 border-white border ">
      <ul className="pl-5">
        <li className="font-semibold pt-4 cursor-pointer flex items-center">
          <IoMdHome className="h-5 w-5 mr-2" /> Home
        </li>
        <li className="font-semibold pt-4 cursor-pointer flex items-center">
          <SiYoutubeshorts className="h-5 w-5 mr-2" /> Shorts
        </li>
        <li className="font-semibold pt-4 cursor-pointer flex items-center">
          <MdSubscriptions className="h-5 w-5 mr-2" /> Subscriptions
        </li>
      </ul>
      <div className="mt-5 ">
        <hr className="m-3" />
        <h2 className="font-bold text-xl pl-3 cursor-pointer">You</h2>
        <ul className="pl-5">
          <li className="font-semibold pt-2 cursor-pointer flex items-center">
            <FaHistory className="h-5 w-5 mr-2" /> History
          </li>
          <li className="font-semibold pt-4 cursor-pointer flex items-center">
            <AiOutlineLike className="h-5 w-5 mr-2" /> Liked Videos{" "}
          </li>
          <li className="font-semibold pt-4 cursor-pointer flex items-center">
            <MdWatchLater className="h-5 w-5 mr-2" /> Watch later{" "}
          </li>
        </ul>
      </div>
      <div className="mt-5 ">
        <hr className="m-3" />
        <h2 className="font-bold text-xl pl-3 cursor-pointer">Explore</h2>
        <ul className="pl-5">
          <li className="font-semibold pt-2 cursor-pointer flex items-center">
            <IoMdTrendingUp className="h-5 w-5 mr-2" /> Trending
          </li>
          <li className="font-semibold pt-4 cursor-pointer flex items-center">
            <GiShoppingBag className="h-5 w-5 mr-2" /> Shopping{" "}
          </li>
          <li className="font-semibold pt-4 cursor-pointer flex items-center">
            <GiMusicalNotes className="h-5 w-5 mr-2" /> Music{" "}
          </li>
          <li className="font-semibold pt-4 cursor-pointer flex items-center">
            <SiYoutubegaming className="h-5 w-5 mr-2" /> Gaming
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
