import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// TODO: Create a new component that uses 'useNavigate' to navigate to '/explore'
// when a button is clicked.
function Home(){
  let navigate = useNavigate();
  
  return <div>
            <h1>Welcome to Home Page</h1>
            <button onClick={()=>navigate('/explore')}>Click to Explore</button>
        </div>
}
// TODO: Create the 'Explore' component that displays a welcome message to the
// Space Explorers' Hub.

function Explore(){
  
    return <h1>Welcome  to the Space Explorers' Hub</h1>;
}

// TODO: Define your 'App' component rendering 'BrowserRouter', 'Link's, 
// and the 'Routes' structure including '/' and '/explore' paths.

export default function App() {
  // TODO: Implement the function body.
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
          </Routes>
        </BrowserRouter>
}
