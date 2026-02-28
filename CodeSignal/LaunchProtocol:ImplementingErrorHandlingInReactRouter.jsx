import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import CommandCenter from './CommandCenter';
import ErrorFallback from './ErrorFallback';
import SuccessPage from './SuccessPage';
import ErrorPage from './ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';

// TODO: Define an App component that uses BrowserRouter to handle routes with ErrorFallback as fallback

// TODO: Set up routes for '/command-center', '/success', '/error', and a default that navigates to '/command-center'
// TODO: Wrap the Routes in an ErrorBoundary and specify the FallbackComponent to display when an error is caught
// TODO: Ensure that all the other routes marked as * are redirected to /command-center
export default function App() {
  // Your code here
  
  return <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
          
            <Route path='/command-center' element={<CommandCenter/>}/>
            <Route path='/success' element={<SuccessPage/>}/>
            <Route path='/error' element={<ErrorPage/>}/>
            <Route path="*" element={<Navigate to='/command-center' replace/>}/>
          </Routes>
          </ErrorBoundary>
         </BrowserRouter>;
}

import { useNavigate } from 'react-router-dom';

function launchConditionsMet() {
  return true;
}

export default function CommandCenter() {
  const navigate = useNavigate();

  const initiateLaunchSequence = () => {
    // Simulating launch sequence and conditional navigation
    if (launchConditionsMet()) {
      navigate('/success');
    } else {
      navigate('/error');
    }
  };

  return (
    <button onClick={initiateLaunchSequence}>Initiate Launch</button>
  );
}

export default function SuccessPage() {
  return (
    <h1>Launch Successful!</h1>
  );
}

export default function ErrorPage() {
  return (
    <h1>Error in Launch Sequence.</h1>
  );
}

export default function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Oops, an error occurred in the command center:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
