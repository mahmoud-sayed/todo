import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrashAlt, FaEdit, FaCheckCircle } from 'react-icons/fa';
import './App.scss';
import axios from 'axios';
const App = () => {

  const [todos, setTodos] = useState([]);

  const fitchURL = 'https://jsonplaceholder.typicode.com/users/1/todos';

  useEffect(() => {

    async function fitchData() {
      const request = await axios.get(fitchURL);
      setTodos(request.data);
    }
    fitchData();

  }, [fitchURL]);
  console.log(todos);

  return (
    <div className='todo-page'>

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