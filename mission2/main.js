import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';

try {
  const app = document.querySelector('#app');
  let state = [
    {
      text: 'JS 공부하기',
      isCompleted: false,
    },
    {
      text: '알고리즘 공부하기',
      isCompleted: false,
    },
  ];
  const todoList = new TodoList(app, state);
  const todoInput = new TodoInput(app, (text) => {
    const newState = [...todoList.getState(), { text, isCompleted: false }];
    todoList.setState(newState);
  });
} catch ({ message }) {
  alert(message);
}
