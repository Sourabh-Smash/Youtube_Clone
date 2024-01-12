import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Constant";

const useYtVideos = () => {
  const [YtData, setYtData] = useState([]);

  useEffect(() => {
    getYtData();
  }, []);
  async function getYtData() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json?.items);
    setYtData(json?.items);
  }
  return YtData;
};

export default useYtVideos;
