import {BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";

const ControlPanel = () => <h1>Control Panel Page</h1>;
const EngineRoom = () => <h1>Engine Room Page</h1>;

function Spaceship() {
  return (
    <div>
      <h2>Spaceship Control Room</h2>
      <Outlet/>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/spaceship">Control Panel</Link><br />
        <Link to="/spaceship/engine">Engine Room</Link>
      </nav>
      <Routes>
        <Route path="/spaceship" element={<Spaceship />}>
        
          <Route index element={<ControlPanel/>}/>
          <Route path='/engine' element={<EngineRoom/>}/>
  
        </Route>
      </Routes>
    </Router>
  );
}
