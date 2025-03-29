import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiSearch, FiX, FiTrash2 } from 'react-icons/fi';
import useDebounce from '../hooks/useDebounce';
import { getSearchHistory, saveSearchHistory } from '../utils/helpers';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecent, setShowRecent] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const searchBarRef = useRef(null);

  useEffect(() => {
    // Load recent searches from localStorage
    setRecentSearches(getSearchHistory());
  }, []);

  const handleSearch = useCallback(() => {
    if (query.trim()) {
      onSearch(query.trim());
      
      // Update recent searches in localStorage and state
      const updatedSearches = saveSearchHistory(query.trim());
      setRecentSearches(updatedSearches);
      setShowRecent(false);
    }
  }, [query, onSearch]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleRecentSearch = (city) => {
    setQuery(city);
    onSearch(city);
    setShowRecent(false);
  };

  const handleDeleteSearch = (city) => {
    const updatedSearches = recentSearches.filter((search) => search !== city);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const clearInput = () => {
    setQuery('');
    setShowRecent(false);
  };

  const handleClickOutside = (e) => {
    if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
      setShowRecent(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className="w-full max-w-md mx-auto relative">
      <div className="relative flex items-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-primary transition-all">
        <FiSearch className="ml-4 text-gray-400 dark:text-gray-300" size={20} />
        <input
          type="text"
          className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => recentSearches.length > 0 && setShowRecent(true)}
        />
        {query && (
          <button 
            className="mr-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 rounded-full p-1"
            onClick={clearInput}
          >
            <FiX size={20} />
          </button>
        )}
      </div>
      
      {showRecent && recentSearches.length > 0 && (
        <div 
          className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-all duration-300 transform origin-top scale-y-100 opacity-100 animate-slide-in"
        >
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Recent Searches
            </h4>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-full text-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                >
                  <span onClick={() => handleRecentSearch(search)}>{search}</span>
                  <button
                    className="ml-2 text-gray-500 hover:text-red-500 dark:hover:text-red-400 p-0 bg-transparent hover:bg-transparent relative -top-0.5"
                    onClick={() => handleDeleteSearch(search)}
                  >
                    <FiTrash2 size={14} className="inline-block" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
