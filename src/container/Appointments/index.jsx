import React from 'react'
import "./index.css";
import teeth from "../../assets/—Pngtree—close-up of a perfectly white_20487178.png";


const Appointments = () => {
  return (
    <div class="appointments">
      <div class="appointment dentist">
        <div className='app_div_1'>
          <p class="title-dentist">Dentist</p>
          <img src={teeth} alt="teeth" style={{width:"2.4rem",height:"2.4rem"}}/>
        </div>
        <div className='app_div_2'>
          <p class="time-dentist">09:00 - 11:00</p>
          <p class="doctor">Dr. Cameron Williamson</p>
        </div>
      </div>
      <div class="appointment physiotherapy">
        <div className='app_div_1'>
          <p class="title-physio">Physiotherapy Appointment</p>
          <span style={{fontSize:"2.4rem"}}>&#128170;</span>
        </div>
        <div className='app_div_2'>
          <p class="time-physio">11:00 - 12:00</p>
          <p class="doctor-physio">Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  )
}

export default Appointments