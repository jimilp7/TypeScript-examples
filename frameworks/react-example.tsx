import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
    </div>
  );
};

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUsers(prev => 
      prev.map(user => user.id === updatedUser.id ? updatedUser : user)
    );
    setSelectedUser(null);
  };

  return (
    <div className="app">
      <h1>TypeScript React Example</h1>
      <div className="users-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} onEdit={handleEditUser} />
        ))}
      </div>
      {selectedUser && (
        <UserEditForm user={selectedUser} onSave={handleUpdateUser} />
      )}
    </div>
  );
};

interface UserEditFormProps {
  user: User;
  onSave: (user: User) => void;
}

const UserEditForm: React.FC<UserEditFormProps> = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...user, name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h3>Edit User</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default App;