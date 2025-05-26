import React from 'react'
import "./index.css"

const Schedules = () => {
  return (
    <div class="upcoming">
        <h3 className='title-upcoming-schedule'>The Upcoming Schedule</h3>
        <div className='main-upcoming-div'>
            <div className='upcoming-grp'>
                <h4 className='upcoming-day'>On Thursday</h4>
                <div className='sch_grp'>
                    <div className='upcoming_main_box sch_box_1'>
                        <div className='schedule-item'>
                            <div>Health checkup complete</div>
                            <img src="" alt="Img" />
                        </div>
                        <p className='schedule-time'>11.00 AM</p>
                    </div>

                    <div className='upcoming_main_box sch_box_2'>
                        <div className='schedule-item'>
                            <div>Ophthalmologist</div>
                            <img src="" alt="Img" />
                        </div>
                        <p className='schedule-time'>14:00 PM</p>
                    </div>
                </div>
            </div>
            
            <div className='upcoming-grp'>
                <h4 className='upcoming-day'>On Saturday</h4>
                <div className='sch_grp'>
                    <div className='upcoming_main_box sch_box_3'>
                        <div className='schedule-item'>
                            <div>Cardiologist</div>
                            <img src="" alt="Img" />
                        </div>
                        <p className='schedule-time'>12:00 AM</p>
                    </div>

                    <div className='upcoming_main_box sch_box_3'>
                        <div className='schedule-item'>
                            <div>Neurologist</div>
                            <img src="" alt="Img" />
                        </div>
                        <p className='schedule-time'>16:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Schedules