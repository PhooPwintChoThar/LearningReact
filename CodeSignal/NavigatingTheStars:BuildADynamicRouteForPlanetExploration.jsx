import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Planet from './Planet';
import { NavLink } from 'react-router-dom';

export default function App() {
  // TODO: Create a navigation link to the "Mars" exploration page
  

  // TODO: Set up the route configuration for planet exploration use a dynamic path to accept any planetName

  // Do not forget to warp everything into a BrowserRouter
  
  
  return <BrowserRouter>
            <nav>
            <NavLink to="planets/Mars">Visit to Mars</NavLink>
            </nav>
            <Routes>
            <Route path='planets/:name' element={<Planet/>}/> 
            </Routes>
        </BrowserRouter>;

}

import { useParams } from 'react-router-dom';

// TODO: Use the "useParams" hook to get the planetName from the URL
export function Planet(){
    const {name}=useParams();
    return <h1> Welcome to the planet {name} </h1>;
}
// TODO: Create a component that welcomes the Space Explorer to the planet they selected in the route
