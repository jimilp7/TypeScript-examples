import React, { useState } from 'react';

interface CounterState {
  count: number;
}

const Counter: React.FC = () => {
  const [state, setState] = useState<CounterState>({ count: 0 });

  const increment = (): void => {
    setState({ count: state.count + 1 });
  };

  const decrement = (): void => {
    setState({ count: state.count - 1 });
  };

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;