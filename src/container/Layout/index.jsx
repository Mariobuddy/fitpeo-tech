import React, { useState, useEffect } from "react";
import "./index.css";
import { RxDashboard } from "react-icons/rx";
import { GrHistory } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { RiAddBoxFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Layout = () => {
  const [currentNav, setCurrentnav] = useState("dashboard");

  const navigate = useNavigate();

  const [size, setSize] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let resizeRes = () => {
      if (window.innerWidth <= 768) {
        setSize(true);
      } else {
        setSize(false);
      }
    };
    window.addEventListener("resize", resizeRes);
    return () => {
      window.removeEventListener("resize", resizeRes);
    };
  }, []);

  let Toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  const handlenav = (val) => {
    setCurrentnav(val);
  };
  return (
    <div className="main-div">
      <div
        className="left"
        style={{
          display: show || (window.innerWidth > 768 && !size) ? "flex" : "none",
        }}
      >
        <div className="left-one-div">
          <h2>
            Health<span>care.</span>
          </h2>
          <div className="left-1" style={{ marginTop: "3rem" }}>
            <h3>General</h3>
            <div className="left-nav-main">
              <NavLink
                className="left-nav"
                to={"dashboard"}
                onClick={() => {
                  handlenav("dashboard");
                }}
                style={{
                  color: currentNav === "dashboard" ? "#3e4a89" : "#B0B7C3",
                }}
              >
                <RxDashboard className="nav-icons" />
                <h3>Dashboard</h3>
              </NavLink>
              <NavLink
                className="left-nav"
                to={"history"}
                onClick={() => {
                  handlenav("history");
                }}
                style={{
                  color: currentNav === "history" ? "#3e4a89" : "#B0B7C3",
                }}
              >
                <GrHistory className="nav-icons" />
                <h3>History</h3>
              </NavLink>
              <NavLink
                className="left-nav"
                to={"calendar"}
                onClick={() => {
                  handlenav("calendar");
                }}
                style={{
                  color: currentNav === "calendar" ? "#3e4a89" : "#B0B7C3",
                }}
              >
                <FaCalendarAlt className="nav-icons" />
                <h3>Calendar</h3>
              </NavLink>
              <NavLink
                className="left-nav"
                to={"appointments"}
                onClick={() => {
                  handlenav("appointments");
                }}
                style={{
                  color: currentNav === "appointments" ? "#3e4a89" : "#B0B7C3",
                }}
              >
                <RiAddBoxFill className="nav-icons" />
                <h3>Appointments</h3>
              </NavLink>
              <NavLink
                className="left-nav"
                to={"statistics"}
                onClick={() => {
                  handlenav("statistics");
                }}
                style={{
                  color: currentNav === "statistics" ? "#3e4a89" : "#B0B7C3",
                }}
              >
                <BsGraphUpArrow className="nav-icons" />
                <h3>Statistics</h3>
              </NavLink>
            </div>
          </div>
          <div className="left-1" style={{ marginTop: "3rem" }}>
            <h3>Tools</h3>
            <div className="left-nav-main">
              <NavLink
                className="left-nav"
                to={"chats"}
                onClick={() => {
                  handlenav("chats");
                }}
                style={{
                  color: currentNav === "chats" ? "#3e4a89" : "#B0B7C3",
                }}
              >
                <BsChatSquareDotsFill className="nav-icons" />
                <h3>Chat</h3>
              </NavLink>
              <NavLink
                className="left-nav"
                to={"supports"}
                onClick={() => {
                  handlenav("supports");
                }}
                style={{
                  color: currentNav === "supports" ? "#3e4a89" : "#B0B7C3",
                }}
              >
                <IoCall className="nav-icons" />
                <h3>Support</h3>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="left-1">
          <NavLink
            className="left-nav"
            to={"settings"}
            onClick={() => {
              handlenav("settings");
            }}
            style={{ color: currentNav === "settings" ? "#3e4a89" : "#B0B7C3" }}
          >
            <IoMdSettings className="nav-icons" />
            <h3>Setting</h3>
          </NavLink>
        </div>
      </div>
      <div className="mobile">
        {show ? (
          <AiOutlineClose className="logo1" onClick={Toggle} />
        ) : (
          <GiHamburgerMenu className="logo1" onClick={Toggle} />
        )}
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
