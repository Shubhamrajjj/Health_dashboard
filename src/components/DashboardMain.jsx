import React from 'react';

const DashboardMain = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-bold mb-2 flex items-center gap-2">💔 Lungs</h3>
          <div className="h-2 bg-red-200 rounded">
            <div className="h-2 bg-red-500 rounded w-[70%]"></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">26 Oct 2021</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-bold mb-2 flex items-center gap-2">🦷 Teeth</h3>
          <div className="h-2 bg-green-200 rounded">
            <div className="h-2 bg-green-500 rounded w-[90%]"></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">26 Oct 2021</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-bold mb-2 flex items-center gap-2">🦴 Bone</h3>
          <div className="h-2 bg-yellow-200 rounded">
            <div className="h-2 bg-yellow-500 rounded w-[50%]"></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">26 Oct 2021</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h4 className="font-semibold mb-4">Activity</h4>
        <div className="grid grid-cols-7 gap-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center">
              <p className="text-xs text-gray-500 mb-1">{day}</p>
              <div className="h-24 bg-gray-100 rounded flex items-end justify-center">
                <div className="w-2 bg-blue-500 rounded" style={{ height: `${Math.floor(Math.random() * 100)}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">3 appointments this week</p>
      </div>
    </section>
  );
};

export default DashboardMain;