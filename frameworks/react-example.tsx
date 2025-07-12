import * as React from 'react';

interface Props {
  name: string;
  count?: number;
}

interface State {
  counter: number;
}

class HelloWorld extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: props.count || 0
    };
  }

  handleClick = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}

export default HelloWorld;