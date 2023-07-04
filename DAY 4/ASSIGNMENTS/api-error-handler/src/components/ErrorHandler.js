import React from 'react';
import { useLocation } from 'react-router-dom';

const ErrorHandler = () => {
  const { state } = useLocation();
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{state}</pre>
    </div>
  );
};

export default ErrorHandler;
