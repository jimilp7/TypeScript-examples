import React from 'react';

interface GreetingProps {
  name: string;
  age?: number;
}

const GreetingComponent: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default GreetingComponent;