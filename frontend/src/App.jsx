import { useState, useEffect, useCallback } from 'react';
import './App.css';

// Components
import WeatherCard from './components/WeatherCard';
import ForecastSection from './components/ForecastSection';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';

// API and utils
import { fetchWeatherData, fetchForecastData } from './utils/api';
import { groupForecastByDay } from './utils/helpers';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState('');
  const [initialSearch, setInitialSearch] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(
    localStorage.getItem('showWelcomePage') !== 'false'
  );

  // Fetch weather and forecast data for a given city
  const fetchData = useCallback(async (cityName) => {
    if (!cityName) return;

    setLoading(true);
    setError('');
    setCity(cityName);

    try {
      const weatherResult = await fetchWeatherData(cityName);
      setWeatherData(weatherResult);

      const forecastResult = await fetchForecastData(cityName);
      const groupedForecast = groupForecastByDay(forecastResult);
      setForecastData(groupedForecast);

      if (!initialSearch) {
        setInitialSearch(true);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.toString());
      setWeatherData(null);
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  }, [initialSearch]);

  // Load the last searched city on initial load
  useEffect(() => {
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    if (recentSearches.length > 0) {
      fetchData(recentSearches[0]);
    }
  }, [fetchData]);

  // Handle search input
  const handleSearch = (searchCity) => {
    fetchData(searchCity);
    setShowWelcomePage(false);
    localStorage.setItem('showWelcomePage', 'false');
  };

  // Refresh weather data for the current city
  const handleRefresh = () => {
    fetchData(city);
  };

  // Detect user's location and fetch weather data
  const handleDetectLocation = () => {
    setShowWelcomePage(false);
    localStorage.setItem('showWelcomePage', 'false');

    if (navigator.geolocation) {
      setLoading(true);
      setLoadingMessage('Fetching your Real Time Location...');
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
            );
            const data = await response.json();
            if (data && data.length > 0) {
              const cityName = data[0].name.replace(/\s+Tahsil\b/, '').trim();
              setLoadingMessage('');
              fetchData(cityName);
            } else {
              throw new Error('Unable to fetch city name from coordinates.');
            }
          } catch (err) {
            console.error('Error fetching city name:', err);
            setError('Unable to detect location. Please try again.');
            setLoading(false);
            setLoadingMessage('');
          }
        },
        (error) => {
          console.error('Error detecting location:', error);
          setError('Unable to detect location. Please enable location services.');
          setLoading(false);
          setLoadingMessage('');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {showWelcomePage ? (
        <WelcomePage onDetectLocation={handleDetectLocation} onSearch={handleSearch} />
      ) : (
        <>
          <Header onDetectLocation={handleDetectLocation} onSearch={handleSearch} />
          <main className="flex-grow px-4 py-8 transition-colors duration-300">
            <div className="container mx-auto">
              <div className="mt-8">
                {loading ? (
                  <div className="text-center">
                    <Loader />
                    {loadingMessage && (
                      <p className="text-gray-600 dark:text-gray-300 mt-4">{loadingMessage}</p>
                    )}
                  </div>
                ) : error ? (
                  <ErrorMessage message={error} />
                ) : !initialSearch ? (
                  <div className="text-center text-gray-600 dark:text-gray-300 py-10">
                    <p className="text-xl">Search for a city to see weather information</p>
                  </div>
                ) : (
                  <>
                    {weatherData && <WeatherCard data={weatherData} onRefresh={handleRefresh} />}
                    {forecastData.length > 0 && <ForecastSection forecastData={forecastData} />}
                  </>
                )}
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
