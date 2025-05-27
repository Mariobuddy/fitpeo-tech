import React from "react";
import "./index.css";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', morning: 50, evening: 70 },
  { day: 'Tues', morning: 60, evening: 50 },
  { day: 'Wed', morning: 30, evening: 60 },
  { day: 'Thurs', morning: 70, evening: 40 },
  { day: 'Fri', morning: 60, evening: 65 },
  { day: 'Sat', morning: 90, evening: 60 },
  { day: 'Sun', morning: 40, evening: 50 }
];

const Statistics = () => {
return (
    <div className="activity-card">
      <div className="activity-header">
        <h2>Activity</h2>
        <p>3 appointments on this week</p>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={160}>
          <BarChart
            data={data}
            barGap={4}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              stroke="#8c8c8c"
              style={{ fontSize: '12px' }}
            />
            <Tooltip />
            <Bar
              dataKey="morning"
              fill="#22d3ee"  /* cyan */
              radius={[10, 10, 0, 0]}
              barSize={6}
            />
            <Bar
              dataKey="evening"
              fill="#6366f1"  /* indigo */
              radius={[10, 10, 0, 0]}
              barSize={6}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
