import React from 'react';
import { formatDate } from '../utils/helpers';

const ForecastSection = ({ forecastData }) => {
  if (!forecastData || !forecastData.length) return null;

  return (
    <div className="max-w-3xl mx-auto mt-8 animate-fade-in">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecastData.map((day, index) => (
          <div
            key={day.dt}
            className="forecast-card animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
              {formatDate(day.dt)}
            </p>
            <div className="flex justify-center my-2">
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                className="w-12 h-12"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-800 dark:text-white">
                {Math.round(day.main.temp)}°C
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                {day.weather[0].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;
