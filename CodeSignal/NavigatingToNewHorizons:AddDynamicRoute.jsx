import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Planet from './Planet';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to the Intergalactic Explorer</h1>
        <nav>
          <Link to="/planet/Mars">Explore Mars</Link> <br />
          <Link to="/planet/Venus">Explore Venus</Link>
        </nav>
        <Routes>
          {/* TODO: Define a dynamic route that leads to the Planet component based on the planet name */}
          <Route path="/planet/:pname" element={<Planet/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}



import { useParams } from 'react-router-dom';

export default function Planet() {
  // TODO: Retrieve the planet name from the URL parameters and return h2 element with a welcome message
  const {pname}=useParams();
  return <h1> Reach to the planet - {pname} </h1>;
}
