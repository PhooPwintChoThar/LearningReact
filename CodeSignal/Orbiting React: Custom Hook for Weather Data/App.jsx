import useFetchWeather from './useFetchWeather';

const WeatherInRome = () => {
  const weather = useFetchWeather('https://api-regional.codesignalcontent.com/weatherManager/getWeather', '41.902782', '12.496366');

  return (
    <div>
      {weather.error ? (
        <alert>{weather.error}</alert>
      ) : weather.isLoading ? (
        <p>The page is loading</p>
      ) : (
        <>
          <p>{weather.weather.temperature}</p>
          <p>{weather.weather.summary}</p>
        </>
      )}
    </div>
  );
};

export default WeatherInRome;
