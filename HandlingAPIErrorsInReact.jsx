function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // initialize an error state

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(response => { // If response is not ok, throw an error, otherwise parse the data to JSON
        if (!response.ok) { throw Error(response.statusText); }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error)); // If error occurred, set it to state
  }, []);

  return ( {/* Render an error message if it occurs, otherwise render fetched data or loading message */}
    <div className="App">
      {error ? <p>{error.message}</p> : data ? <p>Data fetched successfully!</p> : 'Loading...'}
    </div>
  );
}
