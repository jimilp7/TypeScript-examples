import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserCard: React.FC<{ user: User }> = ({ user }) => (
  <div className="user-card">
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
);

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const [newUser, setNewUser] = useState<string>('');

  const addUser = () => {
    if (newUser.trim()) {
      const user: User = {
        id: users.length + 1,
        name: newUser,
        email: `${newUser.toLowerCase().replace(' ', '.')}@example.com`
      };
      setUsers([...users, user]);
      setNewUser('');
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <div>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter user name"
        />
        <button onClick={addUser}>Add User</button>
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