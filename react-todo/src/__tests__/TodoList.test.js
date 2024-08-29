import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {

  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText(/add todo/i));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
