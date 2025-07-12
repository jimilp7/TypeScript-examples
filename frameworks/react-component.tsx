import * as React from 'react';

interface Props {
  name: string;
  count?: number;
}

interface State {
  clicks: number;
}

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      clicks: props.count || 0
    };
  }

  increment = (): void => {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render(): JSX.Element {
    return (
      <div>
        <h2>Hello, {this.props.name}!</h2>
        <p>Clicks: {this.state.clicks}</p>
        <button onClick={this.increment}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;