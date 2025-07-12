import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

interface UserCardProps {
  user: User;
  onEdit?: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  const handleEdit = (): void => {
    if (onEdit) {
      onEdit(user.id);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Role: <span style={{ fontWeight: 'bold' }}>{user.role}</span></p>
      {onEdit && (
        <button onClick={handleEdit}>Edit User</button>
      )}
    </div>
  );
};

export default UserCard;