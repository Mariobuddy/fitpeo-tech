import React from "react";
import SearchBar from "../../components/Layouts/SearchBar";
import BodyView from "../../components/Layouts/BodyView";
import Statistics from "../../components/Layouts/Statistics";
import "./index.css";

const Dashboard = () => {
  return (
    <>
      <div className="right-1">
        <SearchBar />
        <BodyView />
        <Statistics />
      </div>
      <div className="right-2"></div>
    </>
  );
};

export default Dashboard;
