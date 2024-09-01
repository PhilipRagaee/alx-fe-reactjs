const React = require('react');
const { useState } = require('react');

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo List', completed: false },
    { id: 3, text: 'Write Tests', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return React.createElement('div', null, 
    React.createElement('h1', null, 'Todo List'),
    React.createElement('ul', null, 
      todos.map(todo => 
        React.createElement('li', {
          key: todo.id,
          onClick: () => toggleTodo(todo.id),
          style: { textDecoration: todo.completed ? 'line-through' : 'none' }
        }, 
        todo.text, 
        React.createElement('button', {
          onClick: (e) => {
            e.stopPropagation(); // Prevent the toggle from firing when deleting
            deleteTodo(todo.id);
          }
        }, 'Delete'))
      )
    ),
    React.createElement('form', { onSubmit: addTodo }, 
      React.createElement('input', {
        type: 'text',
        value: newTodo,
        onChange: (e) => setNewTodo(e.target.value)
      }),
      React.createElement('button', { type: 'submit' }, 'Add Todo')
    )
  );
};

module.exports = TodoList;
