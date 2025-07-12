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
    <p>ID: {user.id}</p>
  </div>
);

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const [newUserName, setNewUserName] = useState<string>('');
  const [newUserEmail, setNewUserEmail] = useState<string>('');

  const addUser = (): void => {
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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>TypeScript React Example</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          style={{ marginRight: '8px', padding: '8px' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
          style={{ marginRight: '8px', padding: '8px' }}
        />
        <button onClick={addUser} style={{ padding: '8px 16px' }}>
          Add User
        </button>
      </div>

      <div>
        <h2>Users ({users.length})</h2>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;