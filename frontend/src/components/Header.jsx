import React from 'react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import { FiMapPin } from 'react-icons/fi';

const Header = ({ onDetectLocation, onSearch }) => {
  return (
    <header className="bg-primary-light dark:bg-primary-dark text-white shadow-md py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="/weather.svg" alt="Weather Logo" className="w-6 h-6 md:w-8 md:h-8" />
          <h1 className="hidden md:block text-2xl font-bold">Weather Dashboard</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 md:mx-6">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={onDetectLocation}
            className="p-2 rounded-full bg-secondary text-white hover:bg-secondary-dark transition-colors"
            aria-label="Detect Location"
          >
            <FiMapPin size={20} />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
