import React from "react";

const VideoBox = ({ item }) => {
  // console.log(item);
  const { snippet, statistics } = item;
  const { title, thumbnails, channelTitle } = snippet;
  return (
    <div className=" p-3 m-2 mx-5 h-72 w-96 overflow-hidden ">
      <img
        className=" rounded-lg mb-2 w-full"
        src={thumbnails?.medium?.url}
        alt="video"
      />
      <h1 className="text-xl font-semibold text-nowrap overflow-hidden">
        {title}
      </h1>
      <h3>{channelTitle}</h3>
      <h5 className="text-xs">{statistics?.viewCount} Views </h5>
    </div>
  );
};

export default VideoBox;
