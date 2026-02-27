import { ErrorBoundary } from 'react-error-boundary'

function ComponentWithError() { 
  throw new Error('Oops! Something went wrong.'); 
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (<div>
    <p>Error: {error.message}</p>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>);
}

function MyApp() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ComponentWithError />
    </ErrorBoundary>
  );
}

export default MyApp;
