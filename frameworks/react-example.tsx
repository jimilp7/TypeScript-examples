import React from 'react';

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
      <p>Email: {user.email}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
    </div>
  );
};

interface AppState {
  users: User[];
  selectedUser: User | null;
}

const App: React.FC = () => {
  const [state, setState] = React.useState<AppState>({
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
    ],
    selectedUser: null
  });

  const handleEditUser = (user: User): void => {
    setState(prev => ({ ...prev, selectedUser: user }));
  };

  const handleCloseEdit = (): void => {
    setState(prev => ({ ...prev, selectedUser: null }));
  };

  return (
    <div className="app">
      <h1>User Management</h1>
      <div className="user-list">
        {state.users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onEdit={handleEditUser}
          />
        ))}
      </div>
      {state.selectedUser && (
        <div className="edit-modal">
          <h2>Editing: {state.selectedUser.name}</h2>
          <button onClick={handleCloseEdit}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;