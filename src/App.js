import React, { useState, useEffect } from 'react';


import './App.scss';
import axios from 'axios';
import TodosData from './Components/TodosData';
import Form from './Components/Form';
const App = () => {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const fitchURL = 'https://jsonplaceholder.typicode.com/users/1/todos';

  useEffect(() => {
    fitchData();

  }, [fitchURL]);

  const fitchData = async () => {
    const request = await axios.get(fitchURL);
    setTodos(request.data);
  };

  return (
    <div className='todo-page'>

      <div className='todo-wrapper'>

        <Form todo={todo} setTodo={setTodo} />

        <TodosData todos={todos} todo={todo} setTodo={setTodo} />

      </div>
    </div>
  );
};

export default App;