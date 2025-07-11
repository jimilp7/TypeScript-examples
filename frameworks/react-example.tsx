import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  title: string;
}

const UserCard: React.FC<{ user: User }> = ({ user }) => (
  <div className="user-card">
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
);

const App: React.FC<Props> = ({ title }) => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const addUser = () => {
    const newUser: User = {
      id: users.length + 1,
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={addUser}>Add User</button>
      <div className="users-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;