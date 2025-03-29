// Debounce function to limit API calls
export const debounce = (func, delay) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Format date from timestamp
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

// Format time from timestamp
export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Save searches to localStorage
export const saveSearchHistory = (city) => {
  try {
    const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    
    // Remove the city if it already exists (to move it to the front)
    const filteredSearches = searches.filter(search => 
      search.toLowerCase() !== city.toLowerCase()
    );
    
    // Add the new search to the beginning and limit to 5 items
    const updatedSearches = [city, ...filteredSearches].slice(0, 5);
    
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    return updatedSearches;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return [];
  }
};

// Get searches from localStorage
export const getSearchHistory = () => {
  try {
    return JSON.parse(localStorage.getItem('recentSearches')) || [];
  } catch (error) {
    console.error('Error retrieving from localStorage:', error);
    return [];
  }
};

// Group forecast data by day
export const groupForecastByDay = (forecastData) => {
  if (!forecastData || !forecastData.list) return [];
  
  const groupedData = {};
  
  forecastData.list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    
    groupedData[date].push(item);
  });
  
  // Get first 5 days
  return Object.values(groupedData).slice(0, 5).map(dayData => {
    // Find the middle point of the day for representation
    return dayData.length > 0 ? dayData[Math.floor(dayData.length / 2)] : null;
  }).filter(Boolean);
};
