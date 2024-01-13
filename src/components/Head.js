import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/homeVideoSlice";
import useSuggestion from "../hooks/useSuggestion";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestons] = useState(false);
  const suggestions = useSuggestion(searchQuery);
  const dispach = useDispatch();
  const toggleHandler = () => {
    dispach(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-5 shadow-lg">
      <div className="flex col-span-1">
        <FaBars onClick={toggleHandler} className="text-white h-8 w-5" />
        <ImYoutube2 className="text-white h-8 w-28" />
      </div>
      <div className="col-span-10">
        <div className=" text-center flex justify-center">
          <input
            type="text"
            onFocus={() => setShowSuggestons(true)}
            onBlur={() => setShowSuggestons(false)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 border p-1 border-gray-400 rounded-l-xl bg-black focus:outline-none focus:border-blue-600  pl-3"
            placeholder="Enter To Search "
          />
          <button className="p-1.5 border border-gray-400  px-4 rounded-r-xl bg-gray-600 text-white font-bold ">
            <IoSearchSharp />
          </button>
        </div>
        {showSuggestions && (
          <div className="ml-56 w-[35vw] fixed bg-black rounded-lg shadow-md shadow-slate-700">
            <ul className="pt-2">
              {suggestions.map((item, id) => (
                <li
                  key={id}
                  className="cursor-pointer flex items-center shadow-sm pl-3 py-2 shadow-slate-700  hover:bg-gray-700"
                >
                  <IoSearchSharp className="mr-2 " /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <FaUserCircle className="text-white h-8 w-8" />
      </div>
    </div>
  );
};

export default Head;
