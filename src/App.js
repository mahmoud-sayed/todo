import React, { useState, useEffect } from 'react';


import './App.scss';
import axios from 'axios';
import TodosData from './Components/TodosData';
import Form from './Components/Form';
const App = () => {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  console.log(todos);
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
    const newTodo = { id, todo, completed: false };
    const todoLists = { ...todos, newTodo };
    setAndSaveTodos(todoLists);

    await axios.post(fitchURL, todoLists);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
  };

  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <Form todo={todo} setTodo={setTodo} handelSubmit={handelSubmit} />
        <TodosData todos={todos} todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
};

export default App;