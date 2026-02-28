import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import HomePage from './HomePage';
import ErrorSpace from './ErrorSpace';

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error" element={<ErrorSpace />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
