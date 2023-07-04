import * as React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback(error: any) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

interface MessageProps {
  subject: string;
}

function Greeting(props: MessageProps) {
  try {
    if (props.subject === 'English') return <ErrorFallback  error={'Subject Should not be English'}/>;
    else return <div>Hello {props.subject.toUpperCase()}</div>;
  } catch (err) {
    return <ErrorFallback error={'Subject is not mathicng'}/>;
  }
}

function Farewell(props: MessageProps) {
  return <div>Hello {props.subject.toUpperCase()}</div>;
}

export const App = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {<Greeting subject='English' />}
        {<Farewell subject='Hindi' />}
      </ErrorBoundary>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
