import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
};

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
      <h1>TypeScript React Example</h1>
      <div>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter user name"
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <UserList users={users} />
    </div>
  );
};

export default App;