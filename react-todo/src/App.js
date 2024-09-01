const React = require('react');
const TodoList = require('./TodoList');

const App = () => {
  return React.createElement('div', { className: 'App' }, 
    React.createElement(TodoList, null)
  );
};

module.exports = App;
