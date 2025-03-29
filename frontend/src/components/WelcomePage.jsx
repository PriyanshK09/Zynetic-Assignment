import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';

const WelcomePage = ({ onDetectLocation, onSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark text-text-primaryLight dark:text-text-primaryDark">
      {/* Title Section */}
      <h1 className="text-3xl font-bold mb-4">Welcome to Weather Dashboard</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        Get real-time weather updates for any city worldwide. Start by searching for a city or using your current location.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={onDetectLocation}
          className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiMapPin className="mr-2" size={18} />
          Use My Current Location
        </button>
        <button
          onClick={() => onSearch('')}
          className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <FiSearch className="mr-2" size={18} />
          Search for a City
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
