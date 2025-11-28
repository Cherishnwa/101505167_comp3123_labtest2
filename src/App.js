import React, { useState, useEffect } from 'react';
import './App.css';
// Import our custom components
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto'); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '4a5104aa8f9024c81b8a0f2a93fb887a'; 
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchWeatherData(city);
  }, []);
  const handleInputChange = (searchInput) => {
    setCity(searchInput);
    fetchWeatherData(searchInput);
  };

  return (
    <div className="App">
      <div className="container">
      <h1 className="app-title">Weather Forecast</h1>
      <SearchBar onSearch={handleInputChange} />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {weatherData && !loading && (
        <div className='weather-container'>
          <WeatherCard weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
        </div>
      )}
       </div>
    </div>
  );
}




export default App;
