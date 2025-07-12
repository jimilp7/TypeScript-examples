import * as React from 'react';

interface Props {
  name: string;
  count?: number;
}

interface State {
  clicks: number;
}

class ClickCounter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      clicks: this.props.count || 0
    };
  }

  handleClick = (): void => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>You've clicked {this.state.clicks} times</p>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}

const FunctionalExample: React.FC<{ title: string }> = ({ title }) => {
  const [value, setValue] = React.useState<string>('');

  return (
    <div>
      <h2>{title}</h2>
      <input 
        type="text" 
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {value}</p>
    </div>
  );
};

export { ClickCounter, FunctionalExample };