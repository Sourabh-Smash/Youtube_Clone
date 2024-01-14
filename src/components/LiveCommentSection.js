import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import useLiveChat from "../hooks/useLiveChat";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addMessages } from "../utils/chatSlice";
const LiveComment = ({ chat }) => {
  return (
    <div className="flex items-center m-2 bg-gray-600 px-4 py-2 rounded-lg drop-shadow-md shadow-white mb-3 ">
      <FaUserCircle className="text-white h-9 w-8" />
      <div className="mx-2">
        <h1 className="font-semibold">{chat.name}</h1>
        <p className="text-xs">{chat.text}</p>
      </div>
    </div>
  );
};

const LiveCommentSection = () => {
  const [chatText, setChatText] = useState("");
  const dispach = useDispatch();
  const chatMessages = useLiveChat();
  return (
    <div className="w-full mr-3">
      <div className="w-full h-[415px] bg-gray-600 p-3 mr-3 rounded-lg overflow-y-scroll ">
        <div className=" font-semibold text-xl">Live Comments</div>
        <div className="flex flex-col-reverse ">
          {chatMessages.map((chat, id) => (
            <LiveComment chat={chat} key={id} />
          ))}
        </div>
      </div>
      <form
        className=" text-center flex justify-center w-full mt-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispach(
            addMessages({
              name: "Sourabh",
              text: chatText,
            })
          );
          setChatText("");
        }}
      >
        <input
          type="text"
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
          className="w-full border p-1 border-gray-400 rounded-l-xl bg-black focus:outline-none focus:border-blue-600  pl-3 "
          placeholder="Enter To Chat "
        />
        <button className="p-1.5 border border-gray-400  px-4 rounded-r-xl bg-gray-600 text-white font-bold ">
          <RiSendPlane2Fill />
        </button>
      </form>
    </div>
  );
};

export default LiveCommentSection;
