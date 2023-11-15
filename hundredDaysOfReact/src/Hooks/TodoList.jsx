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
    <div>
      <h2>To-Do List</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <p>Total Todos: {todos.length}</p>
    </div>
  );
};

export default Todolist;
