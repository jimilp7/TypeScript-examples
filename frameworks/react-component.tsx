import * as React from 'react';

interface UserProps {
  name: string;
  age: number;
  email?: string;
}

interface UserState {
  count: number;
}

class UserProfile extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render(): React.ReactElement {
    const { name, age, email } = this.props;
    const { count } = this.state;

    return (
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        {email && <p>Email: {email}</p>}
        <button onClick={this.handleClick}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UserProfile;