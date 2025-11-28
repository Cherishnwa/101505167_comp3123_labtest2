import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ weatherData }) => {
  const { main, wind, clouds, visibility, sys } = weatherData;
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
// Array of weather details to display
  // Each item has label (name), value (data), and icon (emoji)
  const weatherDetails = [
    {
      label: 'Min Temperature',              // What it's called
      value: `${Math.round(main.temp_min)}°C`, // The actual value
      icon: '🌡️'                            // Emoji icon
    },
    {
      label: 'Max Temperature',
      value: `${Math.round(main.temp_max)}°C`,
      icon: '🌡️'
    },
    {
      label: 'Humidity',
      value: `${main.humidity}%`,           // Percentage
      icon: '💧'
    },
    {
      label: 'Pressure',
      value: `${main.pressure} hPa`,        // hPa = hectopascals (pressure unit)
      icon: '🔽'
    },
    {
      label: 'Wind Speed',
      value: `${wind.speed} m/s`,           // m/s = meters per second
      icon: '💨'
    },
    {
      label: 'Wind Direction',
      value: `${wind.deg}°`,                // Degrees (0-360, where 0/360 is North)
      icon: '🧭'
    },
    {
      label: 'Cloudiness',
      value: `${clouds.all}%`,              // Percentage of sky covered
      icon: '☁️'
    },
    {
      label: 'Visibility',
      value: `${(visibility / 1000).toFixed(1)} km`, // Convert meters to kilometers
      icon: '👁️'
    },
    {
      label: 'Sunrise',
      value: formatTime(sys.sunrise),       // Use our formatTime function
      icon: '🌅'
    },
    {
      label: 'Sunset',
      value: formatTime(sys.sunset),
      icon: '🌇'
    },
  ];
    return ( 
    <div className="weather-details">
      <h3 className="details-title">Weather Details</h3>
      
      {/* Grid container for all detail items */}
      <div className="details-grid">
        {/* Loop through weatherDetails array */}
        {weatherDetails.map((detail, index) => (
          // Create a card for each detail
          <div key={index} className="detail-item">
            {/* Display emoji icon */}
            <span className="detail-icon">{detail.icon}</span>
            
            {/* Display label and value */}
            <div className="detail-content">
              <p className="detail-label">{detail.label}</p>
              <p className="detail-value">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;