import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-4">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        {/* Footer Content */}
        <p>© {new Date().getFullYear()} Weather Dashboard. All rights reserved.</p>
        <p>Data provided by OpenWeatherMap API</p>
      </div>
    </footer>
  );
};

export default Footer;
