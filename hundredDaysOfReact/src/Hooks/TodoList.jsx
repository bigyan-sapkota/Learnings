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
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>

      <ul className="space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white rounded-md p-4 shadow-md"
          >
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex mt-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md flex-1 mr-2 focus:outline-none"
          placeholder="Add a todo..."
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add
        </button>
      </div>
      <p className="font-bold mt-4">Total Todos: {todos.length}</p>
    </div>
  );
};

export default Todolist;
