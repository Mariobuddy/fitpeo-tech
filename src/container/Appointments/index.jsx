import React from 'react'
import "./index.css";

const Appointments = () => {
  return (
    <div class="appointments">
      <div class="appointment dentist">
        <div className='app_div_1'>
          <p class="title-dentist">Dentist</p>
          <img src="" alt="img" />
        </div>
        <div className='app_div_2'>
          <p class="time-dentist">09:00 - 11:00</p>
          <p class="doctor">Dr. Cameron Williamson</p>
        </div>
      </div>
      <div class="appointment physiotherapy">
        <div className='app_div_1'>
          <p class="title-physio">Physiotherapy Appointment</p>
          <img src="" alt="Img" />
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