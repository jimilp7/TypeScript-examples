import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [user] = useState<User>({ id: 1, name: 'John Doe', email: 'john@example.com' });

  const addTodo = (): void => {
    if (inputValue.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo App for {user.name}</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          style={{ padding: '8px', marginRight: '10px', width: '300px' }}
        />
        <button onClick={addTodo} style={{ padding: '8px 16px' }}>
          Add Todo
        </button>
      </div>
      
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '10px',
            padding: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              flex: 1
            }}>
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{ 
                backgroundColor: '#ff4444', 
                color: 'white', 
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      
      {todos.length === 0 && (
        <p style={{ color: '#666' }}>No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoApp;