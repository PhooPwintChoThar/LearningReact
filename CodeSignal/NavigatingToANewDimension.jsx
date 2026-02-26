import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SpacecraftDetails from './SpacecraftDetails';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/spacecraft/apollo11/mission1">Apollo 11 Details</Link>
      </nav>
      <Routes>
        <Route path="/spacecraft/:spacecraft/:name" element={<SpacecraftDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

import { useParams } from 'react-router-dom';

export default function SpacecraftDetails() {
  const {spacecraft , name } = useParams();
  return <h1>Exploring the {spacecraft}'s {name}!</h1>;
}
