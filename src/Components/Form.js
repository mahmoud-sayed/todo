import React from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
const Form = ({ handelSubmit, setNewTitle, title, editSign }) => {




  return (
    <form onSubmit={handelSubmit}>
      <input type="text" placeholder='Add ToDo' onChange={(e) => setNewTitle(e.target.value)} value={title} />
      <button>{editSign ? <FaEdit /> : <FaPlus />}</button>
    </form>
  );
};

export default Form;