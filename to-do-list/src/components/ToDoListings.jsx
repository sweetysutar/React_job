import React from 'react'
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

const ToDoListings = () => {
const [todos, setTodos]= useState([]);
const [inputValue, setInputValue] = useState('');

const addTodos = () => {
  setTodos([...todos, inputValue]);
  setInputValue('');
}

const delTodos = (indexDelete) => {
  setTodos(todos.filter((event, index) => index !== indexDelete))
}

  return (
    <section className="bg-violet-200 py-50 text-center">
      <div className="container-xl lg:container m-auto">
        <div className="grid p-4 rounded-lg">
          <span>
            <input 
            type="text"
                name="title"
                className="border rounded w-100 py-2 px-3 mb-2 focus:outline-violet-500 text-violet-950 focus:shadow-outline"
                placeholder="eg. Exercise"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}></input>
            <button
            onClick={addTodos}
                className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full w-10 focus:outline-none focus:shadow-outline"
                type="submit">
                +
              </button>
          </span>

          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}
              <button className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full w-10 focus:outline-none focus:shadow-outline"
              onClick={() => delTodos(index)}>-</button>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </section>

  );
};


export default ToDoListings;