import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
    const { name, main, weather, sys } = weatherData;
    
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <div className="weather-card">
            {/* Weather Card Container */}
            <div className='loc-info'> 
                {/* Location Information */}
                <h2 className="city-name">{name}, {sys.country}</h2> 
                {/* City Name and Country */}
                <p className="date">{formattedDate}</p>
                {/* Current Date */}
            </div>
            
            <div className="weather-info">
                {/* Weather Information */}
                <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
                {/* Weather Icon */}
                
                {/* Temperature and Description */}
                <div className="temp-desc">
                    <h3 className="temperature">{Math.round(main.temp)}°C</h3>
                    <p className="feels-like">Feels like {Math.round(main.feels_like)}°C</p>
                    <p className="description">{weather[0].description}</p>
                    {/* Additional Weather Details (Clear, Cloudy, etc.) */}
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;