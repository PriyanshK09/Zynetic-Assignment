import React from 'react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

const Header = ({ onDetectLocation, onSearch }) => {
  return (
    <header className="bg-primary-light dark:bg-primary-dark text-white shadow-md py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="/weather.svg" alt="Weather Logo" className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Weather Dashboard</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onDetectLocation}
            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
          >
            Detect Location
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
