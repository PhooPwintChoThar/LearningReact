import { useState, useEffect } from 'react';

function ClimateData() {
  const [climate, setClimate] = useState({ temperature: 0, summary: 'Loading...', city:'London' });

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/weatherManager/getWeather?lat=41.902782&lng=12.496366')
      .then(response => response.json())
      .then(data => {
        // Update the climate state to have 'city' field and take the value from data.city
        setClimate({ temperature: data.weather.temperature, summary: data.weather.summary , city:data.city});
      });
  }, []);

  return (
    <div>
      {/* Make sure to show the city name here too */}
      <p>Temperature: {climate.temperature}°C</p>
      <p>Conditions: {climate.summary}</p>
      <p>City: {climate.city} </p>
    </div>
  );
}

export default ClimateData;
