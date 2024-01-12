import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnVal = [
    "Music",
    "Live",
    "HipHop",
    "Dance",
    "Cars",
    "Politics",
    "Coding",
    "WebDev",
    "Sports",
    "Javascript",
    "Golang",
    "Java",
    "Rust",
    "Python",
    "Networks",
    "Sourabh",
    "Manawat",
  ];
  return (
    <div className="flex  overflow-hidden">
      {btnVal.map((val, id) => (
        <Button btn={val} key={id} />
      ))}
    </div>
  );
};

export default ButtonList;
