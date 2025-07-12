import React from 'react';

interface Props {
  name?: string;
}

const HelloWorld: React.FC<Props> = ({ name = 'World' }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a simple React component written in TypeScript.</p>
    </div>
  );
};

export default HelloWorld;