import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Counter from './Counter';

function App() {
  return (
    <div style={{ marginLeft: '30px', marginTop: '50px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>
          <strong>
            To see the working of Error boundaries click on the Counters to
            increase the value
          </strong>
        </h1>

        <p>
          Program is made such a way that as soon as the counter reaches the
          value of 3, Error boundaries will throw an error.
        </p>
      </div>
      <hr style={{ width: '500px' }} />
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          then the effect will be done on both as the error boundary will
          replace both of them.
        </p>

        <Counter />
        <Counter />
      </ErrorBoundary>
      <hr style={{ width: '500px' }} />

      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>

      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
