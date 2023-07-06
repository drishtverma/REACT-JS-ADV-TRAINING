import React from 'react';

const Button = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
        {6+9}
      <span data-testid='count'>{count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Button;
