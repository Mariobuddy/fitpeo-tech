import React from "react";
import "./index.css";
import { FaChevronDown } from "react-icons/fa";
import body from "../../../assets/—Pngtree—3d anatomical model of a_20980986.png";
import lungs from "../../../assets/—Pngtree—red lung pink lung tube_3874739.png";
import teeth from "../../../assets/—Pngtree—close-up of a perfectly white_20487178.png";
import bone from "../../../assets/—Pngtree—toon bone_8357847.png";

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
          <FaSearchPlus className="plus-search" />
          <img src={body} alt="body" />
        </div>
        <div className="right-body-bottom-right">
          <div className="right-body-bottom-right-1">
            <div className="box-image-div">
              <img src={lungs} alt="lungs" />
              <p>Lungs</p>
            </div>
            <p>Date : 26 Oct 2021</p>
            <div class="progress-bar">
              <div class="progress-fill" style={{backgroundColor:"#ff4d4f"}}></div>
            </div>
          </div>
          <div className="right-body-bottom-right-1">
            <div className="box-image-div">
              <img src={teeth} alt="teeth" />
              <p>Teeth</p>
            </div>
            <p>Date : 26 Oct 2021</p>
            <div class="progress-bar">
              <div class="progress-fill" style={{backgroundColor:"#36d399"}}></div>
            </div>
          </div>
           <div className="right-body-bottom-right-1">
            <div className="box-image-div">
              <img src={bone} alt="bone" />
              <p>Bone</p>
            </div>
            <p>Date : 26 Oct 2021</p>
            <div class="progress-bar">
              <div class="progress-fill" style={{backgroundColor:"#f97316"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyView;
