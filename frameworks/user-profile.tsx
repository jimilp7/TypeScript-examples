import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  age: number;
  bio: string;
}

interface UserProfileProps {
  user?: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user: initialUser }) => {
  const [user, setUser] = useState<User>(
    initialUser || {
      name: '',
      email: '',
      age: 0,
      bio: ''
    }
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleInputChange = (field: keyof User, value: string | number): void => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleEdit = (): void => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h2>User Profile</h2>
      {isEditing ? (
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={user.age}
              onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
            />
          </div>
          <div>
            <label>Bio:</label>
            <textarea
              value={user.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
            />
          </div>
          <button onClick={toggleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;