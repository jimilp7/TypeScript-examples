import * as React from 'react';

interface Props {
  name: string;
  count?: number;
}

interface State {
  clicks: number;
}

export class GreetingComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleClick = (): void => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render(): JSX.Element {
    const { name, count = 0 } = this.props;
    const { clicks } = this.state;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Initial count: {count}</p>
        <p>Button clicks: {clicks}</p>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}

export const FunctionalGreeting: React.FC<Props> = ({ name, count = 0 }) => {
  const [clicks, setClicks] = React.useState<number>(0);

  const handleClick = (): void => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <h3>Hello, {name}!</h3>
      <p>Initial count: {count}</p>
      <p>Button clicks: {clicks}</p>
      <button onClick={handleClick}>
        Click me too!
      </button>
    </div>
  );
};