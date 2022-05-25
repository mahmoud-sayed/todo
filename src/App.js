import React, { useState, useEffect } from 'react';


import './App.scss';
import axios from 'axios';
import TodosData from './Components/TodosData';
import Form from './Components/Form';
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

        <Form />

        <TodosData todos={todos} />

      </div>
    </div>
  );
};

export default App;