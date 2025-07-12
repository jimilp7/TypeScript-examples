import React, { useState } from 'react';

interface Props {
  title: string;
  initialCount?: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const Counter: React.FC<Props> = ({ title, initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);

  const increment = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = (): void => {
    setCount(prevCount => prevCount - 1);
  };

  const addUser = (): void => {
    const newUser: User = {
      id: users.length + 1,
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      
      <div>
        <h3>Users ({users.length})</h3>
        <button onClick={addUser}>Add User</button>
        <ul>
          {users.map((user: User) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;