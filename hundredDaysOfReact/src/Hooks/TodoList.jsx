// Exercise: To-Do List with Removal
// Create a React component for a to-do list with the following features:

// Display a list of to-do items.
// Each item should have a "Remove" button.
// Implement the ability to add new to-do items.
// Track the total number of to-do items.

import React, { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "Buy Vegetables",
    },
    { id: 2, task: "Clean room" },
    { id: 3, task: "Wash clothes" },
  ]);
  const [numberOfTask, setNumberOfTask] = useState(3);
  const [newTask, setNewTask] = useState("");

  const inputHandler = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };

  return (
    <div>
      <div className="m-10">
        {/* Show List Item with delete button */}
        <div>
          <h1 className="font-bold text-xl mb-4">Your Tasks</h1>
          {todo.map((item, i) => (
            <div key={i} className="w-1/5 flex justify-between mb-4">
              <div>{item.task}</div>
              <button className="btn">Delete</button>
            </div>
          ))}
        </div>

        {/* Add Items */}
        <form>
          <input type="text" onChange={inputHandler} className="inpt" />
        </form>
      </div>
    </div>
  );
};

export default Todolist;
