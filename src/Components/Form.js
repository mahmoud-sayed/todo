import React from 'react';
import { FaPlus } from 'react-icons/fa';
const Form = ({ handelSubmit, setNewTitle, title }) => {




  return (
    <form onSubmit={handelSubmit}>
      <input type="text" placeholder='Add ToDo' onChange={(e) => setNewTitle(e.target.value)} value={title} />
      <button><FaPlus /></button>
    </form>
  );
};

export default Form;