import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function CargoHold() {
  return <h1>Welcome to the Cargo Hold</h1>;
}

function EngineRoom() {
  return <h1>Engine Room - Authorized Personnel Only</h1>;
}

function Denied() {
  return <h1>Access Denied</h1>;
}


export default function App() {
  let loggedIn = false;
  
  return (<BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/cargo-hold">Cargo Hold</Link></li>
        <li><Link to="/engine-room">Engine Room</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/cargo-hold" element={<CargoHold />} />
      <Route 
        path="/engine-room" 
        element={loggedIn ? <EngineRoom /> : <Navigate to='/access-denied'/> /* TODO: Redirect to "access-denied" if the user is not logged in. Don't forget to add access-denied route and create component for it */} 
      />
      <Route path='/access-denied' element={<Denied/>}/>
    </Routes>
  </BrowserRouter>
  );
}
