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

  const [filteredTask, setFilteredTask] = useState(tasks);
  const menuItems = ["All", "Study", "Workout", "Coding"];

  const categoryHandler = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredTask(tasks);
    } else {
      const filtered = tasks.filter(
        (task) => task.category === selectedCategory
      );
      setFilteredTask(filtered);
    }
  };

  return (
    <div>
      <div className="p-10">
        <div className="flex justify-between px-10">
          <h1 className="font-extrabold text-2xl ">
            Task <span className="text-purple-600">Scheduler</span>
          </h1>
          <nav className="flex mb-10">
            {menuItems.map((item, i) => (
              <button
                key={i}
                className="px-2 py-1 border-2 border-neutral-300 bg-white-700 rounded-md mr-2 text-purple-600 font-medium border-b-4 border-b-purple-600 border-r-4 border-r-purple-600 shadow-sm hover:bg-purple-600 hover:text-white hover:border-purple-600"
                onClick={() => categoryHandler(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center">
          {filteredTask.map((item, i) => (
            <div
              key={i}
              className="p-7 shadow-md mb-8 border border-neutral-200 w-4/5"
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
