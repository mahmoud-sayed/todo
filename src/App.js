import React, { useState, useEffect } from 'react';


import './App.scss';
import axios from 'axios';
import TodosData from './Components/TodosData';
import Form from './Components/Form';
const App = () => {

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const fitchURL = 'https://jsonplaceholder.typicode.com/users/1/todos';

  useEffect(() => {
    fitchData();

  }, [fitchURL]);

  const fitchData = async () => {
    const request = await axios.get(fitchURL);
    setTodos(request.data);
  };

  const setAndSaveTodos = (newTodo) => {
    setTodos(newTodo);
  };

  const addTodo = async () => {
    const id = todos[todos.length - 1].id + 1;
    const newTodo = { id, title, completed: false };
    const todoLists = [...todos, newTodo];
    setAndSaveTodos(todoLists);

    await axios.post(fitchURL, todoLists);

  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTodo(title);

  };
  console.log(todos);
  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <Form todo={title} setTitle={setTitle} handelSubmit={handelSubmit} />
        <TodosData todos={todos} todo={title} setTitle={setTitle} />
      </div>
    </div>
  );
};

export default App;