import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const TaskScheduler = () => {
  const [tasks, setTask] = useState([
    { task: "Complete assingment", category: "Study", isCompleted: false },
    { task: "100 pushups", category: "Workout", isCompleted: false },
    {
      task: "Complete studying PHP",
      category: "Coding",
      isCompleted: false,
    },
    { task: "Run 6 miles", category: "Workout", isCompleted: true },
  ]);

  const [filteredTask, setFilteredTask] = useState(tasks);
  const menuItems = ["All", "Study", "Workout", "Coding"];

  const completedHandler = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTask(updatedTasks);
  };

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
      <div className="py-10 px-7">
        {/* Navbar */}
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

        <div className="flex justify-between px-14">
          {/* Tasks */}
          <div className="flex flex-col items-center">
            {filteredTask.map((item, i) => (
              <div
                key={i}
                className="py-5 px-8 shadow-md mb-8 border border-neutral-200 w-full hover:bg-[#fffff1]"
              >
                <div className="flex justify-between items-center w-full gap-32">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-lg">{item.task}</p>
                    <div className="text-xs bg-green-600 text-white px-1 py-0.5 rounded-md">
                      {item.category}
                    </div>
                  </div>
                  <button
                    className={`bg-gray-200 rounded-full p-1 hover:scale-105 cursor-pointer ${
                      item.isCompleted ? "bg-black text-white" : ""
                    }`}
                    onClick={() => completedHandler(i)}
                  >
                    <TiTick />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Form for adding items */}
          <div className="pl-32 w-1/3">
            <form className="flex flex-col">
              <input
                type="text"
                className="border border-neutral-400 rounded-md px-3 py-1 mb-4"
                placeholder="Enter the Task..."
              />

              <input
                type="text"
                className="border border-neutral-400 rounded-md px-3 py-1 mb-3"
                placeholder="Enter the Task..."
              />
              <label className="mb-1">Due Date:</label>
              <input
                type="date"
                className="border border-neutral-400 rounded-md px-3 py-1"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskScheduler;
