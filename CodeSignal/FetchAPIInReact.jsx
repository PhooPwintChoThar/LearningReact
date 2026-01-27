function WeatherComponent() {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/current.json?q=Rome')
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      });
  }, [])
  if (loading) {
    return <p>Loading...</p>;
  }
  return (<div>
      <h1>Weather in {weatherData.location.name}</h1>
      <p>{weatherData.current.condition.text}</p>
    </div>
  )
}
export default WeatherComponent;
