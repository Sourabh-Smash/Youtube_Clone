import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentsObj = [
  {
    name: "Sourabh",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
    replies: [],
  },
  {
    name: "Sourabh",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
    replies: [
      {
        name: "Sourabh",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
        replies: [],
      },
      {
        name: "Sourabh",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
        replies: [
          {
            name: "Sourabh",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
            replies: [
              {
                name: "Sourabh",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
                replies: [],
              },
              {
                name: "Sourabh",
                text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
                replies: [],
              },
            ],
          },
          {
            name: "Sourabh",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
            replies: [],
          },
          {
            name: "Sourabh",
            text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
            replies: [],
          },
        ],
      },
      {
        name: "Sourabh",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
        replies: [],
      },
    ],
  },
  {
    name: "Sourabh",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
    replies: [],
  },
  {
    name: "Sourabh",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
    replies: [],
  },
  {
    name: "Sourabh",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit.",
    replies: [],
  },
];

const CommentBox = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center m-2 bg-gray-600 px-4 py-2 rounded-lg shadow-md shadow-gray-400 mb-3 ">
      <FaUserCircle className="text-white h-9 w-8" />
      <div className="mx-2">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ eachComment }) => {
  return eachComment.map((comment, idx) => (
    <div key={idx} className="">
      <CommentBox data={comment} />
      <div className="ml-5 border-l-2  border-l-slate-500">
        <CommentList eachComment={comment?.replies} />
      </div> 
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <>
      <div className="m-3">
        <div className="text-2xl font-semibold">Commnet Section</div>
        <CommentList eachComment={commentsObj} />
      </div>
    </>
  );
};

export default CommentContainer;
