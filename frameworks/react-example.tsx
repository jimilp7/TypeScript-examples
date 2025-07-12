import * as React from 'react';

interface HelloProps {
    name: string;
    count?: number;
}

interface HelloState {
    counter: number;
}

class HelloComponent extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            counter: props.count || 0
        };
    }

    handleIncrement = (): void => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.handleIncrement}>
                    Increment
                </button>
            </div>
        );
    }
}

export default HelloComponent;