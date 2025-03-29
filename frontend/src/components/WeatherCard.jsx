import React from 'react';
import { FiDroplet, FiWind, FiRefreshCw } from 'react-icons/fi';
import { formatDate, formatTime } from '../utils/helpers';

const WeatherCard = ({ data, onRefresh }) => {
  if (!data) return null;

  const {
    name,
    main: { temp, humidity, feels_like },
    weather,
    wind,
    dt,
    sys: { country }
  } = data;

  // Map weather conditions to corresponding SVG filenames
  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': 'day.svg',
      '01n': 'night.svg',
      '02d': 'cloudy-day.svg',
      '02n': 'cloudy-night.svg',
      '03d': 'cloudy.svg',
      '03n': 'cloudy.svg',
      '04d': 'cloudy.svg',
      '04n': 'cloudy.svg',
      '09d': 'rain.svg',
      '09n': 'rain.svg',
      '10d': 'rain.svg',
      '10n': 'rain-night.svg',
      '11d': 'thunder.svg',
      '11n': 'thunder.svg',
      '13d': 'snow.svg',
      '13n': 'snow.svg',
      '50d': 'snow.svg',
      '50n': 'snow.svg',
    };
    return `/${iconMap[iconCode] || 'default.svg'}`;
  };

  return (
    <div className="weather-card max-w-md mx-auto animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-text-primaryLight dark:text-text-primaryDark">
            {name}, {country}
          </h2>
          <p className="text-sm text-text-secondaryLight dark:text-text-secondaryDark">
            {formatDate(dt)} | {formatTime(dt)}
          </p>
        </div>
        <button
          className="p-2 rounded-full bg-secondary-light dark:bg-secondary-dark text-text-secondaryLight dark:text-text-secondaryDark hover:bg-secondary-light/80 dark:hover:bg-secondary-dark/80 active:scale-95 transition-all"
          onClick={onRefresh}
          aria-label="Refresh weather data"
        >
          <FiRefreshCw size={20} />
        </button>
      </div>

      <div className="mt-6 flex items-center">
        <div className="flex-1">
          <div className="flex items-center">
            <img
              src={getWeatherIcon(weather[0].icon)}
              alt={weather[0].description}
              className="w-20 h-20"
            />
            <div>
              <h3 className="text-4xl font-bold text-text-primaryLight dark:text-text-primaryDark">
                {Math.round(temp)}°C
              </h3>
              <p className="text-text-secondaryLight dark:text-text-secondaryDark">
                Feels like {Math.round(feels_like)}°C
              </p>
            </div>
          </div>
          <p className="text-text-primaryLight dark:text-text-primaryDark capitalize text-lg mt-1">
            {weather[0].description}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-accent-light/20 dark:bg-accent-dark/20 p-3 rounded-lg flex items-center">
          <FiDroplet className="text-accent-light dark:text-accent-dark mr-2" size={24} />
          <div>
            <p className="text-sm text-text-secondaryLight dark:text-text-secondaryDark">Humidity</p>
            <p className="font-semibold text-text-primaryLight dark:text-text-primaryDark">{humidity}%</p>
          </div>
        </div>
        <div className="bg-accent-light/20 dark:bg-accent-dark/20 p-3 rounded-lg flex items-center">
          <FiWind className="text-accent-light dark:text-accent-dark mr-2" size={24} />
          <div>
            <p className="text-sm text-text-secondaryLight dark:text-text-secondaryDark">Wind Speed</p>
            <p className="font-semibold text-text-primaryLight dark:text-text-primaryDark">
              {Math.round(wind.speed * 3.6)} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
