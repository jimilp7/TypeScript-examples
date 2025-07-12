import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserCard: React.FC<{ user: User }> = ({ user }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
  </div>
);

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  const addUser = () => {
    if (newUserName && newUserEmail) {
      const newUser: User = {
        id: users.length + 1,
        name: newUserName,
        email: newUserEmail
      };
      setUsers([...users, newUser]);
      setNewUserName('');
      setNewUserEmail('');
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      
      <div>
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      <div>
        <h2>Users</h2>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;