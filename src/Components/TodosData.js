import React from 'react';
import Todo from './Todo';

const TodosData = ({ todos, handelDelete }) => {


  return (
    <React.Fragment>
      {todos.map((todo) => (<Todo key={todo.id} title={todo.title} completed={todo.completed} handelDelete={handelDelete} id={todo.id} />))}

    </React.Fragment>
  );
};

export default TodosData;