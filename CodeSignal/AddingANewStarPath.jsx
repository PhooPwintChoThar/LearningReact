import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Stars from './Stars';
import Gallery from './Gallery';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> <br/> 
        <Link to="/stars">Stars</Link>
        {/* Add link for /gallery route */}
        <br/>
        <Link to='/gallery'>Gallery</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Add a new Route here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
