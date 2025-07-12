import * as React from 'react';

interface Props {
    name: string;
    age?: number;
}

interface State {
    count: number;
}

class UserCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { count: 0 };
    }

    handleClick = (): void => {
        this.setState({ count: this.state.count + 1 });
    }

    render(): JSX.Element {
        const { name, age } = this.props;
        const { count } = this.state;

        return (
            <div className="user-card">
                <h2>Hello, {name}!</h2>
                {age && <p>Age: {age}</p>}
                <p>Button clicked: {count} times</p>
                <button onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        );
    }
}

const App: React.FC = () => {
    return (
        <div>
            <UserCard name="Alice" age={30} />
            <UserCard name="Bob" />
        </div>
    );
};

export default App;