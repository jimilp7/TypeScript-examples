import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (): void => {
    setCount(prev => prev + 1);
  };

  const decrement = (): void => {
    setCount(prev => prev - 1);
  };

  const reset = (): void => {
    setCount(initialValue);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;