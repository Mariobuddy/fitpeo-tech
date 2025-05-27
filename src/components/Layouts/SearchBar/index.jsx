import React from "react";
import "./index.css";
import { IoNotifications } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return <div className="right-search">
  <div className="right-search-left">
    <LuSearch className="search-icon"/>
    <input placeholder="Search"/>
  </div>
  <IoNotifications className="right-search-right"/>

  </div>;
};


export default SearchBar;
