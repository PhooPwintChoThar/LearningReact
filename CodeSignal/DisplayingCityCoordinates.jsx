import { useState } from 'react';

function CityWeather() {
  const [city, setCity] = useState('Rome'); // Default selection
  const [location, setLocation] = useState({});

  const fetchLocation = () => {
    fetch(`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`)
      .then(response => response.json())
      .then(data => setLocation(data.location))
      .catch(error => console.error('Oops! There was an error:', error));
  }
  
  // TODO: Set displayLocation to show latitude and longitude if both `lat` and `lng` exist in the location object.
  // If either is missing, set displayLocation to 'Location data not available'.
  let displayLocation = location.lat && location.lng ? `latitude ${location.lat} , longitude ${location.lng}`:'Location data not available';
  
  return (
    <div>
      <select value={city} onChange={e => setCity(e.target.value)}>
        <option value="Rome">Rome</option>
        <option value="Kharkiv">Kharkiv</option>
      </select>
      <button onClick={fetchLocation}>Check Location</button>
      <div>{displayLocation}</div>
    </div>
  );
}

export default CityWeather;
