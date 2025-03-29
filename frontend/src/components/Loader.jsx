import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div
        className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
      />
    </div>
  );
};

export default Loader;
