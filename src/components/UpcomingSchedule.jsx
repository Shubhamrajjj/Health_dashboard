import React from 'react';

const UpcomingSchedule = () => (
  <div className="bg-white p-4 rounded-2xl shadow-lg">
    <h4 className="font-semibold mb-4 text-lg">The Upcoming Schedule</h4>
    <div className="space-y-2">
      <div className="flex justify-between bg-purple-100 rounded-lg p-2">
        <span className="font-semibold text-sm">Health checkup complete</span>
        <span className="text-xs">11:00 AM</span>
      </div>
      <div className="flex justify-between bg-blue-100 rounded-lg p-2">
        <span className="font-semibold text-sm">Ophthalmologist</span>
        <span className="text-xs">14:00 PM</span>
      </div>
      <div className="flex justify-between bg-pink-100 rounded-lg p-2">
        <span className="font-semibold text-sm">Cardiologist ❤️</span>
        <span className="text-xs">12:00 AM</span>
      </div>
      <div className="flex justify-between bg-yellow-100 rounded-lg p-2">
        <span className="font-semibold text-sm">Neurologist 🧠</span>
        <span className="text-xs">16:00 PM</span>
      </div>
    </div>
  </div>
);

export default UpcomingSchedule;
