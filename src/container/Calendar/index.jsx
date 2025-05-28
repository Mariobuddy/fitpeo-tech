import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import "./index.css";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";

const Calendar = () => {
  const date = [
    { day: "Mon", date: "25", times: ["10:00", "11:00", "12:00"] },
    { day: "Tues", date: "26", times: ["08:00", "09:00", "10:00"] },
    { day: "Wed", date: "27", times: ["12:00", null, "13:00"] },
    { day: "Thurs", date: "28", times: ["10:00", "11:00", null] },
    { day: "Fri", date: "29", times: [null, "14:00", "16:00"] },
    { day: "Sat", date: "30", times: ["12:00", "14:00", "15:00"] },
    { day: "Sun", date: "31", times: ["09:00", "10:00", "11:00"] },
  ];

  return (
    <div className="calendar-main-div">
      <div className="calendar-child-1">
        <div className="calendar-emoji">
          {" "}
          <span style={{ fontSize: "2.4rem" }}>&#128102;</span>
        </div>
        <div className="calendar-add">
          <IoMdAdd className="calendar-add-icon" />
        </div>
      </div>
      <div className="calendar-child-2">
        <h3>October 2021</h3>
        <div className="arrow-calendar">
          <RiArrowLeftFill className="arrow-calendar-1" />
          <RiArrowRightFill className="arrow-calendar-2" />
        </div>
      </div>
      <div className="calendar-child-3">
        {date?.map((val, i) => {
          return (
            <div
              className="calendar-child-3-inner"
              key={i}
              style={{ backgroundColor: val?.day === "Tues" ? "#eff2f5" : "" }}
            >
              <h3 style={{ opacity: val?.day === "Sun" ? "0.4" : "1" }}>
                {val?.day}
              </h3>
              <h2 style={{ opacity: val?.day === "Sun" ? "0.4" : "1" }}>
                {val?.date}
              </h2>

              {val?.times?.map((time, i) => {
                return (
                
                  <h5
                    key={i}
                    style={{
                      backgroundColor:
                        (val?.day === "Tues" && time === "09:00") ||
                        (val?.day === "Thurs" && time === "11:00")
                          ? "#3e4a89"
                          : "",
                      color:
                        (val?.day === "Tues" && time === "09:00") ||
                        (val?.day === "Thurs" && time === "11:00")
                          ? "#DADADA"
                          : (val?.day === "Sat" && time === "12:00") ||
                            (val?.day === "Sun" && time === "09:00")
                          ? "#F9F9F9"
                          : "#3e4a89",
                      opacity:
                        val?.day === "Sun" && time === "09:00"
                          ? "1"
                          : val?.day === "Sun" ||
                            (val?.day === "Thurs" && time === "11:00")
                          ? "0.4"
                          : "1",
                    }}
                  >
                    {time === null ? (
                      <span className="line-calendar"></span>
                    ) : (
                      time
                    )}
                    {(val?.day === "Thurs" && time === "11:00") ||
                    (val?.day === "Sun" && time === "09:00") ||
                    (val?.day === "Sat" && time === "12:00") ? (
                      <div className="circle"></div>
                    ) : (
                      ""
                    )}
                    {val?.day === "Sat" && time === "12:00" && (
                      <div className="multi-show-cal"></div>
                    )}
                  </h5>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
