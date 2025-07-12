import * as React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onEdit: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>Edit</button>
    </div>
  );
};

const App: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const handleEdit = (id: number) => {
    console.log(`Editing user with id: ${id}`);
  };

  return (
    <div className="app">
      <h1>User Management</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default App;