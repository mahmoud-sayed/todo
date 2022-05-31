import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import TodosData from './Components/TodosData';
import './App.scss';

import axios from 'axios';


const App = () => {

  const [todos, setTodos] = useState([]);
  const [title, setNewTitle] = useState('');

  //url for fitch data
  const DATA_URL = 'http://localhost:100/data';


  //fitch data
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(DATA_URL);
      setTodos(data.data);
    };
    getData();
  }, []);




  // handel submit function
  const handelSubmit = async (e) => {
    e.preventDefault();
    //create new id
    if (todos.length === 0) {
      // create new todo if there is no todos
      const id = 1;
      const newTodoData = { id, title, completed: false };
      setTodos([newTodoData]); // to add the data so it can show of without refetching
      await axios.post(DATA_URL, newTodoData);
    } else {
      // create new todo if there is already todos
      const id = todos[todos.length - 1].id + 1;
      const newTodoData = { id, title, completed: false };
      setTodos([...todos, newTodoData]); // to add the data so it can show of without refetching
      await axios.post(DATA_URL, newTodoData);
    }
    setNewTitle('');


  };

  const handelDelete = async (id) => {
    const todosAfterFilter = todos.filter(todo => todo.id !== id);
    await axios.delete(`${DATA_URL}/${id}`, todosAfterFilter);
    setTodos(todosAfterFilter);
  };

  //to handel the check
  const handelCheck = async (id) => {
    const todoItems = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    const myTodoItem = todoItems.filter(todo => todo.id === id);
    setTodos(todoItems);
    await axios.patch(`${DATA_URL}/${id}`, myTodoItem[0]);
  };


  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <Form handelSubmit={handelSubmit} setNewTitle={setNewTitle} title={title} />
        <TodosData todos={todos} handelDelete={handelDelete} handelCheck={handelCheck} />
      </div>
    </div>
  );
};

export default App;