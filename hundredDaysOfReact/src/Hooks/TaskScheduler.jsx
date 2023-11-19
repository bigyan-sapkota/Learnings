import React, { useState } from "react";

const TaskScheduler = () => {
  const [tasks, setTask] = useState([
    { task: "Complete assingment", category: "Study", dueDate: "2023/11/25" },
    { task: "100 pushups", category: "Workout", dueDate: "2023/11/23" },
    {
      task: "Complete studying PHP",
      category: "Coding",
      dueDate: "2023/11/28",
    },
    { task: "Run 6 miles", category: "Workout", dueDate: "2023/12/23" },
  ]);
  return (
    <div>
      <div className="p-10">
        <nav></nav>
        <div>
          {tasks.map((item, i) => (
            <div
              key={i}
              className="p-7 shadow-md mb-8 border border-neutral-200"
            >
              {item.task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskScheduler;
