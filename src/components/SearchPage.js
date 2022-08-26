import React from "react";
import SearchResults from "./SearchResults";
import SideBar from "./SideBar";

const SearchPage = () => {
  return (
    <div className='flex'>
      <SideBar />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
