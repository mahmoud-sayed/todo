import React from 'react';
import { FaPlus } from 'react-icons/fa';
const Form = ({ todo, setTodo, handelSubmit }) => {




  return (
    <form onSubmit={handelSubmit}>
      <input type="text" placeholder='Add ToDo' onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button><FaPlus /></button>
    </form>
  );
};

export default Form;