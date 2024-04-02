import TodoList from './TodoList.js';

try {
  const app = document.querySelector('#app');
  const state = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: '알고리즘 공부하기',
      isCompleted: false,
    },
  ];
  const state2 = [
    {
      text: '네트워크',
      isCompleted: true,
    },
    {
      text: '운영체제',
      isCompleted: false,
    },
  ];
  const todoList = new TodoList(app, state);
  const todoList2 = new TodoList(app, state2);

  todoList.setState([
    {
      text: '프로그래머스 Level 2 문제풀기',
      isCompleted: true,
    },
    {
      text: '벨로그 정리하기',
      isCompleted: false,
    },
    {
      text: '개발 서적 읽기',
      isCompleted: false,
    },
  ]);
} catch ({ message }) {
  alert(message);
}
