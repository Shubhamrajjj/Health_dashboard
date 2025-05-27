import React from 'react';

const Header = ({ onMenuClick }) => (
  <div className="flex items-center justify-between bg-white p-4 shadow">
    {/* Left section: Hamburger + Search */}
    <div className="flex items-center space-x-4">
      {/* Hamburger (mobile only) */}
      <button
        className="lg:hidden p-2 rounded hover:bg-gray-200"
        onClick={onMenuClick}
      >
        {/* Simple hamburger icon */}
        <span className="text-2xl">☰</span>
      </button>

      {/* Search bar */}
      <div className="hidden sm:block">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>

    {/* Right section: Notifications + Profile */}
    <div className="flex items-center space-x-4">
      <button className="relative p-2 rounded-full hover:bg-gray-200">
        <span className="material-icons">notifications</span>
        {/* You can add a red dot here if you want */}
      </button>
      <i class="fa-solid fa-user"></i>
    </div>
  </div>
);

export default Header;
