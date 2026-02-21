import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Discovery from './Discovery';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        {/* Define the routes for "/" and "/discovery" paths as routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/discovery" element={<Discovery />} />
        
        {/* TODO: Each route should render its corresponding component when its path is matched in the URL: / to Home  and /discovery to Discovery */}
        {/* Use 'element' prop to specify what component should be rendered */}
        {/* Make sure to put all Route elements inside Routes element */}
      </Routes>
        <nav>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/discovery">Discovery</Link>
          {/* TODO: Add Links for navigation, with 'to' prop pointing to the respective paths */}
        </nav>
      </div>
    </BrowserRouter>
  );
}
export default App;

// TODO: Export the App component as the default export
