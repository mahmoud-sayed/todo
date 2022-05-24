import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(res => {
        const data = res.data;
        setTodos(data);
        console.log(todos);
      }).catch(err => console.log(err));

    return () => {

    };
  }, []);



  return (
    <div>Data</div>
  );
};

export default Data;