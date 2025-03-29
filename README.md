# Weather Dashboard

A modern and responsive Weather Dashboard web app built with React.js and Tailwind CSS. It fetches real-time weather data using the OpenWeatherMap API and provides users with live weather updates for any searched city. The app also includes a 5-day weather forecast, error handling, and a clean, user-friendly interface.

## Features

- **Real-Time Weather Updates**: Get current weather conditions for any city worldwide.
- **5-Day Forecast**: View a detailed 5-day weather forecast.
- **Search History**: Save and access recent city searches.
- **Location Detection**: Automatically detect and display weather for your current location.
- **Dark Mode**: Toggle between light and dark themes for better accessibility.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Error Handling**: User-friendly error messages for invalid searches or API issues.

## Screenshots

- **Light Mode - Weather Dashboard**
![Screenshot 1](/screenshot/screenshot1.png)
- **Dark Mode - Weather Dashboard**
![Screenshot 2](/screenshot/screenshot2.png)
- **Welcome Screen**
![Screenshot 3](/screenshot/screenshot3.png)

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **API**: OpenWeatherMap API
- **Build Tool**: Vite
- **Icons**: React Icons

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PriyanshK09/weather-dashboard.git
   cd weather-dashboard
   ```

2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the `frontend` directory and add your OpenWeatherMap API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the app in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## Folder Structure

```
frontend/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Helper functions and API calls
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   ├── main.jsx          # Entry point
├── .env                  # Environment variables
├── package.json          # Project configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
```

## Environment Variables

The app requires the following environment variable:

- `VITE_WEATHER_API_KEY`: Your OpenWeatherMap API key.

## API Integration

The app uses the OpenWeatherMap API to fetch weather data. You can sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- [React Icons](https://react-icons.github.io/react-icons/) for the icons used in the app.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
