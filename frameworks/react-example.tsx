import * as React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserCardProps {
    user: User;
    onUserClick: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onUserClick }) => {
    return (
        <div className="user-card" onClick={() => onUserClick(user)}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};

interface AppState {
    users: User[];
    selectedUser: User | null;
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'John Doe', email: 'john@example.com' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
                { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
            ],
            selectedUser: null
        };
    }

    handleUserClick = (user: User): void => {
        this.setState({ selectedUser: user });
    }

    render(): React.ReactElement {
        const { users, selectedUser } = this.state;

        return (
            <div className="app">
                <h1>TypeScript React Example</h1>
                <div className="user-list">
                    {users.map(user => (
                        <UserCard 
                            key={user.id} 
                            user={user} 
                            onUserClick={this.handleUserClick}
                        />
                    ))}
                </div>
                {selectedUser && (
                    <div className="selected-user">
                        <h2>Selected User:</h2>
                        <p>Name: {selectedUser.name}</p>
                        <p>Email: {selectedUser.email}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default App;