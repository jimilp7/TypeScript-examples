import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ]);

  const handleDeleteUser = (id: number): void => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User Management</h1>
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onDelete={handleDeleteUser} 
        />
      ))}
    </div>
  );
};

export default App;