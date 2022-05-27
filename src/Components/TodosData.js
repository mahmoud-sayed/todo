import React from 'react';
import Todo from './Todo';

const TodosData = ({ todos }) => {

  const todo = todos.map((todo) => (<Todo key={todo.id} title={todo.title} completed={todo.completed} />));

  return (
    <React.Fragment>
      {
        todo
      }
    </React.Fragment>
  );
};

export default TodosData;