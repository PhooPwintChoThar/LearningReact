import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PlanetDetails from './PlanetDetails';

// App Component
function App() {
  return (
    <BrowserRouter>
      <h1>Space Travel</h1>
      <nav>
        <Link to="/planet/Mars">Discover Mars</Link>
      </nav>
      <Routes>
        <Route path="/planet/:planetName" element={<PlanetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



import { useParams } from 'react-router-dom';

// PlanetDetails Component with a bug in parameter usage
function PlanetDetails() {
  // Incorrect destructuring of params object that does not match the route path
  const { planetName } = useParams();
  return <h2>Welcome to the planet {planetName}!</h2>;
}

export default PlanetDetails;
