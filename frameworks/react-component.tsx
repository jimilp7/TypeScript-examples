import React, { useState } from 'react';

interface UserProps {
  name: string;
  age: number;
}

const UserProfile: React.FC<UserProps> = ({ name, age }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div>
      {isVisible && (
        <div>
          <h2>User Profile</h2>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <button onClick={() => setIsVisible(false)}>
            Hide Profile
          </button>
        </div>
      )}
      {!isVisible && (
        <button onClick={() => setIsVisible(true)}>
          Show Profile
        </button>
      )}
    </div>
  );
};

export default UserProfile;