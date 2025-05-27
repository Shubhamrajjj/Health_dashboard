import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMain from './components/DashboardMain';
import CalendarWidget from './components/CalendarWidget';
import UpcomingSchedule from './components/UpcomingSchedule';


export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div>
        {/* Mobile sidebar (hidden on lg) */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 lg:hidden`}
        >
          <Sidebar />
        </div>

        {/* Static sidebar for large screens */}
        <div className="hidden lg:block lg:w-64 bg-white shadow">
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-4 sm:p-6 grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2 space-y-4">
            <DashboardMain />
          </div>
          <div className="space-y-4">
            <CalendarWidget />
            <UpcomingSchedule />
           
          </div>
        </main>
      </div>
    </div>
  );
}
