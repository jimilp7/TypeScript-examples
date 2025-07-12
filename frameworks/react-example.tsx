import * as React from 'react';

interface Props {
  name: string;
  count?: number;
}

interface State {
  count: number;
}

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.count || 0
    };
  }

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;