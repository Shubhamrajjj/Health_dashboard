import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg p-4">
      <h1 className="text-xl font-bold mb-8 text-blue-600">Healthcare.</h1>
      <nav className="space-y-4">
        <div className="text-gray-700 hover:text-blue-600 cursor-pointer"><i class="fa-solid fa-table-columns mr-2"></i>Dashboard</div>
        <div className="text-gray-700 hover:text-blue-600 cursor-pointer"><i class="fa-solid fa-timeline mr-2"></i>History</div>
        <div className="text-gray-700 hover:text-blue-600 cursor-pointer"><i class="fa-solid fa-calendar-days mr-2"></i>Calendar</div>
        <div className="text-gray-700 hover:text-blue-600 cursor-pointer"><i class="fa-solid fa-calendar-check mr-2"></i>Appointments</div>
        <div className="text-gray-700 hover:text-blue-600 cursor-pointer"><i class="fa-regular fa-chart-bar mr-2"></i>Statistics</div>
        <div className='mt-8 text-gray-900 '>Tools</div>
        <div className="mt-8 text-gray-700 hover:text-blue-600 cursor-pointer"><i class="fa-solid fa-comment-dots mr-2"></i>Chat</div>
        <div className="text-gray-700 hover:text-blue-600 cursor-pointer"><i class="fa-solid fa-phone mr-2"></i>Support</div>
      </nav>
      <div className="mt-50 text-gray-500 text-sm"><i class="fa-solid fa-gear mr-2"></i>Settings</div>
    </aside>
  );
};

export default Sidebar;