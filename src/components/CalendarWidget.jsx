import React from 'react';

const CalendarWidget = () => (
  <div className="bg-white p-4 rounded-xl shadow">
    <h5 className="font-semibold mb-4">October 2021</h5>
    <div className="grid grid-cols-7 text-center text-sm mb-4">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
        <div key={d}>{d}</div>
      ))}
      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
        <div key={day} className={`py-1 ${day === 26 ? 'bg-purple-500 text-white rounded' : ''}`}>
          {day}
        </div>
      ))}
    </div>
    <div className="space-y-2">
      <div className="bg-purple-100 p-2 rounded">
        <p>Dentist</p>
        <p className="text-xs">09:00–11:00 Dr. Cameron Williamson</p>
      </div>
      <div className="bg-blue-100 p-2 rounded">
        <p>Physiotherapy</p>
        <p className="text-xs">11:00–12:00 Dr. Kevin Djones</p>
      </div>
    </div>
  </div>
);

export default CalendarWidget;
