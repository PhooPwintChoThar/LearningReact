import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Dashboard';
import SpaceCrew from './SpaceCrew';
import NotFound from './NotFound';

function hasCrewAccess() {
  return true;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Dashboard />} />

        {/* Protected route */}
        <Route
          path="/space-crew"
          element={
            hasCrewAccess()
              ? <SpaceCrew />
              : <Navigate to="/" replace />
          }
        />

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
