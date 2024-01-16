import { useEffect, useState } from "react";
import { API_KEY } from "../Constant";

const useShowSearchYtVideos = (searchItem) => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    getsearchVideos();
  }, [searchItem]);
  async function getsearchVideos() {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchItem}&key=${API_KEY}`
    );
    const json = await data.json();
    setSearchData(json?.items);
  }
  return searchData;
};

export default useShowSearchYtVideos;
