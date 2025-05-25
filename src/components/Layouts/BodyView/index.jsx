import React from "react";
import "./index.css";
import { FaChevronDown } from "react-icons/fa";
import body from "../../../assets/—Pngtree—3d anatomical model of a_20980986.png"
import { FaSearchPlus } from "react-icons/fa";

const BodyView = () => {
  return (
    <div className="right-body">
      <div className="right-body-top">
        <h2>Dashboard</h2>
        <div className="week-div">
          <p>This Week</p>
          <FaChevronDown className="arrow-down" />
        </div>
      </div>
      <div className="right-body-bottom">
        <div className="right-body-bottom-left">
            <FaSearchPlus className="plus-search"/>
            <img src={body} alt="body"/>
        </div>
        <div className="right-body-bottom-right">
            <div className="right-body-bottom-right-1"></div>
            <div className="right-body-bottom-right-1"></div>
            <div className="right-body-bottom-right-1"></div>

        </div>

      </div>
    </div>
  );
};

export default BodyView;
