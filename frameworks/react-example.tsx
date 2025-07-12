import React, { useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserCard: React.FC<{ user: User }> = ({ user }) => (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius: '4px' }}>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
    </div>
);

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);

    const [newUser, setNewUser] = useState({ name: '', email: '' });

    const addUser = () => {
        if (newUser.name && newUser.email) {
            setUsers([...users, { id: Date.now(), ...newUser }]);
            setNewUser({ name: '', email: '' });
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>User Management</h1>
            
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    style={{ marginRight: '8px', padding: '8px' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    style={{ marginRight: '8px', padding: '8px' }}
                />
                <button onClick={addUser} style={{ padding: '8px 16px' }}>
                    Add User
                </button>
            </div>

            <div>
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default App;