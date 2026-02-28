import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ControlCenter from './ControlCenter';
import ErrorPage from './ErrorPage';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/control-center">Control Center</NavLink>
      </nav>
      <Routes>
        <Route path="/control-center"
          element={
            <ErrorBoundary FallbackComponent={ErrorPage}>
              {/* TODO: Wrap the component that might throw an error with your ErrorBoundary and provide ErrorPage as a fallback component. */}
              <ControlCenter/>
            </ErrorBoundary>
          }
        />
        {/* TODO: Add a route for the ErrorPage component */}
        <Route path='/error' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}


import { useNavigate } from 'react-router-dom';

export default function ControlCenter() {
  const navigate = useNavigate();
  
  const handleEmergency = async () => {
    try {
      // Simulate a function that might fail
      throw new Error('Critical error in spaceship engine!');
    } catch (error) {
      // TODO: Navigate the crew to the error page when an emergency occurs
      navigate('/error')
    }
  };

  return (
    <div>
      <h1>Space Exploration Command Center</h1>
      <button onClick={handleEmergency}>Emergency Evacuation</button>
    </div>
  );
}

const ErrorPage = () => {
    return (<div>
      <h1> Try again later </h1>
    </div>);
}

export default ErrorPage;
