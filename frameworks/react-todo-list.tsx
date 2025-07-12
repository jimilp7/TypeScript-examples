import React, { useState } from 'react';

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    title?: string;
}

const TodoList: React.FC<TodoListProps> = ({ title = "My Todo List" }) => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const addTodo = (): void => {
        if (inputValue.trim() !== '') {
            const newTodo: TodoItem = {
                id: Date.now(),
                text: inputValue.trim(),
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
        <div>
            <h2>{title}</h2>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo..."
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;