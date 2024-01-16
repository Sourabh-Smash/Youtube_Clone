import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS } from "../Constant";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const useSuggestion = (searchQuery) => {
  const searchCache = useSelector((store) => store.search);
  const dispach = useDispatch();
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setApiData(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  async function getSuggestions() {
    // console.log("Api - " + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTIONS + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setApiData(json[1]);

    dispach(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }
  return apiData;
};

export default useSuggestion;
