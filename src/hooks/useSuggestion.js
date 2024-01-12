import React, { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS } from "../Constant";

const useSuggestion = (searchQuery) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
    const getSuggestions = async () => {
      console.log("Api - "+searchQuery)
    const data = await fetch(YOUTUBE_SUGGESTIONS + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setApiData(json[1]);
  };
  return apiData;
};

export default useSuggestion;
