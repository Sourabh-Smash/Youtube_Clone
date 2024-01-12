import React from "react";
import useYtVideos from "../hooks/useYtVideos";
import VideoBox from "./VideoBox";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const YtVideos = useYtVideos();
  // console.log(YtVideos);
  return (
    <div className="flex flex-wrap">
      {YtVideos.map((item, id) => (
        <Link key={id} to={"/watch?v=" + item?.id}>
          <VideoBox item={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
