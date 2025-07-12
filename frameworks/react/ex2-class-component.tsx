import * as React from 'react';

interface CounterProps {
  initialCount?: number;
}

interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount || 0
    };
  }

  increment = (): void => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = (): void => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render(): React.ReactNode {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;