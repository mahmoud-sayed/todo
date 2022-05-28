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

    if (todos.length === 0) {
      const id = 1;
      const Todo = { id, title, completed: false };
      const newTodo = [Todo];
      setAndSaveTodos(newTodo);
      await axios.post(fitchURL, newTodo);

    } else {
      const id = todos[todos.length - 1].id + 1;
      const newTodo = { id, title, completed: false };
      const todoLists = [...todos, newTodo];
      setAndSaveTodos(todoLists);
      await axios.post(fitchURL, todoLists);

    }

  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTodo(title);
    setTitle('');
  };

  const handelDelete = (id) => {
    const todosAfterDelete = todos.filter(todo => todo.id !== id);
    setTodos(todosAfterDelete);
    console.log(todosAfterDelete);
  };
  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <Form todo={title} setTitle={setTitle} handelSubmit={handelSubmit} />
        <TodosData todos={todos} todo={title} setTitle={setTitle} handelDelete={handelDelete} />
      </div>
    </div>
  );
};

export default App;