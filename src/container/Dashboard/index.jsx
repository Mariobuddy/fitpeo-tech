import React from "react";
import SearchBar from "../../components/Layouts/SearchBar";
import BodyView from "../../components/Layouts/BodyView";

const Dashboard = () => {
  return (
    <>
      <SearchBar />
     <BodyView/>
      <div className="right-graph"></div>
    </>
  );
};

export default Dashboard;
