// Exercise: To-Do List with Removal
// Create a React component for a to-do list with the following features:

// Display a list of to-do items.
// Each item should have a "Remove" button.
// Implement the ability to add new to-do items.
// Track the total number of to-do items.

import React, { useState } from "react";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodo = [...todos];
    updatedTodo.splice(index, 1);
    setTodos(updatedTodo);
  };

  return (
    <div className="m-20">
      <h2>To-Do List</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex gap-4 my-4">
            {todo}
            <button onClick={() => removeTodo(index)} className="btn">
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="inpt"
        />
        <button onClick={addTodo} className="btn">
          Add
        </button>
      </div>
      <p>Total Todos: {todos.length}</p>
    </div>
  );
};

export default Todolist;
