import React from 'react';
import { FaTrashAlt, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Todo = ({ todos }) => {
  return (
    <div className='todos'>
      <ul>
        <li>
          <div className='todo-data'>
            <input type="checkbox" />
            <p >sasasasas</p>
          </div>
          <div className='todo-actions'>
            <FaCheckCircle className='todo-check' />
            <FaEdit className='todo-edit' />
            <FaTrashAlt className='todo-delete' />
          </div>
        </li>
        <li>
          <div className='todo-data'>
            <input type="checkbox" />
            <p >sasasasas</p>
          </div>
          <div className='todo-actions'>
            <FaCheckCircle className='todo-check' />
            <FaEdit className='todo-edit' />
            <FaTrashAlt className='todo-delete' />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Todo;