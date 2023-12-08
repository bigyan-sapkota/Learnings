import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const newTodoList = [...tasks, newTask];
    setTasks(newTodoList);
    setNewTask("");
  };

  const deleteTask = (taskName) => {
    setTasks(tasks.filter((task) => task !== taskName));
  };

  return (
    <div>
      <div className="addTask">
        <input
          type="text"
          placeholder="Enter the task..."
          value={newTask}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {tasks.map((task, i) => (
          <div key={i}>
            {task}
            <button
              onClick={() => {
                deleteTask(task);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
