import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ComponentWithError() { 
    throw new Error('Unexpected error occurred in the component.'); // This component throws an error
}

function LoginPage() {
  return (
    <ReactErrorBoundary fallback={<h2>Oops...something went wrong.</h2>}> // Using ReactErrorBoundary to wrap our component
      <ComponentWithError/>
    </ReactErrorBoundary>
  );
}
