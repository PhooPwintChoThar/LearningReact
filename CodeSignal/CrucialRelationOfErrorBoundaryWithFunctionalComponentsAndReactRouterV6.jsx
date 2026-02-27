import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function HomePage() { /*...*/ }
function LoginPage() { /*...*/ }

function App() {
  return (
    <Router>
      <ReactErrorBoundary FallbackComponent={() => <Navigate to="/error" replace />} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/error" element={<h2>Oops... something went wrong.</h2>} />
          {/* You can add more routes as needed */}
        </Routes>
      </ReactErrorBoundary>
    </Router>
  );
}
