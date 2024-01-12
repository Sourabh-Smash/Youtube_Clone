import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeMenu } from "../utils/homeVideoSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispach = useDispatch();
  useEffect(() => {
    dispach(removeMenu());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="600"
        height="315"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;