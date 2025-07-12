import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

interface UserProfileProps {
  user: User;
  onEdit?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onEdit }) => {
  const getRoleColor = (role: User['role']): string => {
    switch (role) {
      case 'admin': return '#ff4444';
      case 'user': return '#4444ff';
      case 'guest': return '#888888';
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>
        Role: <span style={{ color: getRoleColor(user.role), fontWeight: 'bold' }}>
          {user.role}
        </span>
      </p>
      {onEdit && (
        <button onClick={onEdit}>Edit Profile</button>
      )}
    </div>
  );
};

export default UserProfile;