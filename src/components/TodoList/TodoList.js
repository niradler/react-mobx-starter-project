import React from 'react';

const TodoList = ({todos}) => (
 <ul>
    {todos.map((i) => (<li key={i}>{i}</li>))}
  </ul>
)

export default TodoList;
