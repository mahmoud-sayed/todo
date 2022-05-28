import React from 'react';
import { FaTrashAlt, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Todo = ({ title, completed, handelDelete, id }) => {

  return (
    <div className='todos'>
      <ul>
        <li>
          <div className='todo-data'>
            <input type="checkbox" checked={completed} />
            <p >{title}</p>
          </div>
          <div className='todo-actions'>
            <FaCheckCircle className='todo-check' />
            <FaEdit className='todo-edit' />
            <FaTrashAlt className='todo-delete' onClick={() => handelDelete(id)} />
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Todo;