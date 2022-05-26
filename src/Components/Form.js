import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
const Form = ({ todo, setTodo }) => {

  const [todo, setTodo] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" placeholder='Add ToDo' onChange={(e) => setTodo(e.target.value)} />
      <button><FaPlus /></button>
    </form>
  );
};

export default Form;