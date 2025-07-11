import React from 'react';

interface UserProps {
  name: string;
  age: number;
}

const User: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>TypeScript React Example</h1>
      <User name="John Doe" age={30} />
    </div>
  );
};

export default App;