import React from 'react';

interface HelloWorldProps {
  name?: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name = 'World' }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a simple TypeScript React component.</p>
    </div>
  );
};

export default HelloWorld;