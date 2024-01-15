import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useShowSearchYtVideos from "../hooks/useShowSearchYtVideos";
import SearchResultVideoBox from "./SearchResultVideoBox";

const SearchListVidoeContainer = () => {
  const searchedVideos = useSelector(
    (store) => store.recomendSearch.clickOption
  );
  const searchedVideosList = useShowSearchYtVideos(searchedVideos);
  console.log(searchedVideosList);
  return (
    <div className="flex flex-wrap">
      {searchedVideosList.map((item, id) => (
        <Link key={id} to={"/watch?v=" + item?.id?.videoId}>
          <SearchResultVideoBox item={item} />
        </Link>
      ))}
    </div>
  );
};

export default SearchListVidoeContainer;
