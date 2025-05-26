import React from "react";
import SearchBar from "../../components/Layouts/SearchBar";
import BodyView from "../../components/Layouts/BodyView";
import Statistics from "../../components/Layouts/Statistics";
import "./index.css";
import Calendar from "../Calendar";
import Appointments from "../Appointments";
import Schedules from "../Schedules";

const Dashboard = () => {
  return (
    <>
      <div className="right-1">
        <SearchBar />
        <BodyView />
        <Statistics />
      </div>
      <div className="right-2">
        <Calendar/>
        <Appointments/>
        <Schedules/>
      </div>
    </>
  );
};

export default Dashboard;
