import React from 'react';
import Todo from './Todo';

const TodosData = ({ todos }) => {

  return (
    <React.Fragment>
      {
        todos.map((todo) => (
          <Todo key={todo.id} title={todo.title} completed={todo.completed} />)
        )
      }
    </React.Fragment>
  );
};

export default TodosData;