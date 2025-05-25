import React from "react";
import SearchBar from "../../components/Layouts/SearchBar";
import BodyView from "../../components/Layouts/BodyView";
import Statistics from "../../components/Layouts/Statistics";

const Dashboard = () => {
  return (
    <>
      <SearchBar />
      <BodyView />
      <Statistics />
    </>
  );
};

export default Dashboard;
