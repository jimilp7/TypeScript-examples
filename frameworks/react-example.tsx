import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = (): void => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;