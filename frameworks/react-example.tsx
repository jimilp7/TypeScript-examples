import * as React from 'react';

interface TodoProps {
    items: string[];
    onAddItem: (item: string) => void;
}

interface TodoState {
    newItem: string;
}

class TodoList extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);
        this.state = { newItem: '' };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newItem: event.target.value });
    }

    handleAddClick = () => {
        if (this.state.newItem.trim()) {
            this.props.onAddItem(this.state.newItem);
            this.setState({ newItem: '' });
        }
    }

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <ul>
                    {this.props.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div>
                    <input
                        type="text"
                        value={this.state.newItem}
                        onChange={this.handleInputChange}
                        placeholder="Enter new todo item"
                    />
                    <button onClick={this.handleAddClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoList;