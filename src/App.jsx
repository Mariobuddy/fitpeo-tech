import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./container/Layout";
import Appointments from "./container/Appointments";
import Calendar from "./container/Calendar";
import Chats from "./container/Chats";
import Dashboard from "./container/Dashboard";
import History from "./container/History";
import Settings from "./container/Settings";
import Supports from "./container/Supports";
import Statistics from "./container/Statistics";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="history" element={<History />} />
          <Route path="settings" element={<Settings />} />
          <Route path="supports" element={<Supports />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="chats" element={<Chats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
