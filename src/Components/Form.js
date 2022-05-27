import React from 'react';
import { FaPlus } from 'react-icons/fa';
const Form = ({ title, setTitle, handelSubmit }) => {




  return (
    <form onSubmit={handelSubmit}>
      <input type="text" placeholder='Add ToDo' onChange={(e) => setTitle(e.target.value)} value={title} />
      <button><FaPlus /></button>
    </form>
  );
};

export default Form;