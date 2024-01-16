import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS2 } from "../Constant";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const useSuggestion = (searchQuery="iphone") => {
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
    const data = await fetch(YOUTUBE_SUGGESTIONS2 + searchQuery);
    const json = await data.text();
    const searchSuggestions = [];
    json.split("[").forEach((ele, index) => {
      if (!ele.split('"')[1] || index === 1) return;
      return searchSuggestions.push(ele.split('"')[1]);
    });
    // console.log(searchSuggestions);
    setApiData(searchSuggestions);

    dispach(
      cacheResults({
        [searchQuery]: searchSuggestions,
      })
    );
  }
  return apiData;
};

export default useSuggestion;



