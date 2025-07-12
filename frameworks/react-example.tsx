import * as React from 'react';

interface Props {
  name: string;
  age?: number;
}

interface State {
  count: number;
}

class UserProfile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = (): void => {
    this.setState({ count: this.state.count + 1 });
  }

  render(): JSX.Element {
    const { name, age } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        {age && <p>Age: {age}</p>}
        <p>Button clicked: {count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default UserProfile;