import React from 'react';
import Todo from './Todo';

const TodosData = ({ todos, handelDelete, handelCheck, handelEdit }) => {


  return (
    <React.Fragment>
      {
        todos.length === 0 ? <h2 style={{ color: '#3A7BD5' }}>There is No todo </h2> :
          todos.map(todo =>
            <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} handelDelete={handelDelete} handelCheck={handelCheck} handelEdit={handelEdit} />
          )
      }
    </React.Fragment >
  );
};

export default TodosData;