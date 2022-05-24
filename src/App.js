import React from 'react';
import { FaPlus, FaTrashAlt, FaEdit, FaCheckCircle } from 'react-icons/fa';
import './App.scss';
import Data from './Components/data/Data';
const App = () => {

  return (
    <div className='todo-page'>
      <Data />
      <div className='todo-wrapper'>

        <form>
          <input type="text" />
          <button><FaPlus /></button>
        </form>

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
      </div>
    </div>
  );
};

export default App;