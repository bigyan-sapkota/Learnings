// import React, { useState } from "react";
// import { TiTick } from "react-icons/ti";
// import { FaPlus } from "react-icons/fa6";
// import { MdOutlineDateRange } from "react-icons/md";
// import "react-toastify/dist/ReactToastify.css";

// const TaskScheduler = () => {
//   const [tasks, setTasks] = useState([
//     {
//       task: "Prepare presentation",
//       category: "Work",
//       isCompleted: false,
//       dueDate: "2023-12-05",
//     },
//     {
//       task: "Cook dinner",
//       category: "Home",
//       isCompleted: false,
//       dueDate: "2024-01-22",
//     },
//     {
//       task: "Learn new piano piece",
//       category: "Hobby",
//       isCompleted: false,
//       dueDate: "2023-11-29",
//     },
//     {
//       task: "Yoga session",
//       category: "Health",
//       isCompleted: false,
//       dueDate: "2023-12-19",
//     },
//   ]);

//   const [menuItems, setMenuItems] = useState([
//     "All",
//     "Work",
//     "Home",
//     "Hobby",
//     "Health",
//   ]);

//   const [newTask, setNewTask] = useState("");
//   const [taskCategory, setTaskCategory] = useState("");
//   const [isNewCategory, setIsNewCategory] = useState(false);
//   const [dueDate, setDueDate] = useState("");

//   const addTaskHandler = (e) => {
//     e.preventDefault();

//     if (isNewCategory && !menuItems.includes(taskCategory)) {
//       setMenuItems([...menuItems, taskCategory]);
//     }
//     setTasks((prevTasks) => [
//       ...prevTasks,
//       {
//         task: newTask,
//         category: taskCategory,
//         isCompleted: false,
//         dueDate: dueDate,
//       },
//     ]);
//   };

//   const completedHandler = (index) => {
//     const updatedTasks = tasks.map((item, i) =>
//       i === index ? { ...item, isCompleted: !item.isCompleted } : item
//     );
//     setTasks(updatedTasks);
//   };

//   const categoryHandler = (selectedCategory) => {
//     if (selectedCategory === "All") {
//       setTasks(tasks);
//     } else {
//       const filtered = tasks.filter(
//         (task) => task.category === selectedCategory
//       );
//       setTasks(filtered);
//     }
//   };

//   const deleteHandler = (i) => {
//     const deleteHandlerTask = [...tasks];
//     deleteHandlerTask.splice(i, 1);
//     setTasks(deleteHandlerTask);
//   };

//   return (
//     <div>
//       <div className="py-10 px-7">
//         {/* Navbar */}
//         <div className="flex justify-between px-10">
//           <h1 className="font-extrabold text-2xl ">
//             Task <span className="text-purple-600">Scheduler</span>
//           </h1>
//           <nav className="flex mb-10">
//             {menuItems.map((item, i) => (
//               <button
//                 key={i}
//                 className="px-5 py-1 border-2 border-neutral-300 bg-white-700 rounded-md mr-2 text-purple-600 font-medium border-b-4 border-b-purple-600 border-r-4 border-r-purple-600 shadow-sm hover:bg-purple-600 hover:text-white hover:border-purple-600"
//                 onClick={() => categoryHandler(item)}
//               >
//                 {item}
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="flex justify-between px-14">
//           {/* Tasks */}
//           <div className="flex flex-col items-center">
//             {tasks.map((item, i) => (
//               <div
//                 key={i}
//                 className="py-5 px-8 shadow-md mb-8 border border-neutral-300 w-full hover:bg-[#fffff1] relative"
//               >
//                 <div className="flex justify-between items-center w-full gap-32">
//                   <div className="flex items-center justify-center gap-2">
//                     <p className="text-lg max-w-[250px]">{item.task}</p>
//                     <div className="text-xs bg-green-600 text-white px-1 py-0.5 rounded-md">
//                       {item.category}
//                     </div>
//                   </div>
//                   <button
//                     className={`rounded-full p-1 hover:scale-105 cursor-pointer ${
//                       item.isCompleted
//                         ? "bg-blue-600 text-white"
//                         : "bg-gray-200 text-black"
//                     }`}
//                     onClick={() => completedHandler(i)}
//                   >
//                     <TiTick />
//                   </button>
//                 </div>
//                 <button
//                   className="absolute -top-3 -right-2 w-4 h-4 p-3 bg-red-500 text-white border rounded-full flex items-center justify-center"
//                   onClick={() => deleteHandler(i)} // Pass the index 'i'
//                 >
//                   x
//                 </button>
//                 <div className="absolute -top-4 -left-2 bg-purple-600 border border-neutral-500 shadow-md px-2.5 py-0.5 flex items-center gap-2 rounded-md text-white text-sm">
//                   <MdOutlineDateRange />
//                   {item.dueDate}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Form for adding items */}
//           <div className="ml-32 w-1/3 border border-neutral-200 shadow-lg rounded-lg px-10 py-7 max-h-[420px]">
//             <h1 className="text-3xl font-bold mb-6">Add Task:</h1>
//             <form className="flex flex-col justify-start">
//               <input
//                 type="text"
//                 className="border border-neutral-400 rounded-md px-3 py-2 mb-4 outline-none "
//                 placeholder="Enter the Task..."
//                 value={newTask}
//                 onChange={(e) => {
//                   setNewTask(e.target.value);
//                 }}
//                 required
//               />
//               <button
//                 className={`w-fit border px-2 py-1 text-sm rounded-md mb-3 font-medium border-purple-600 ${
//                   isNewCategory
//                     ? "text-white bg-purple-600"
//                     : "text-purple-600 bg-white "
//                 }`}
//                 onClick={(event) => {
//                   event.preventDefault();
//                   setIsNewCategory(!isNewCategory);
//                 }}
//               >
//                 New Category
//               </button>
//               <input
//                 type="text"
//                 className="border border-neutral-400 rounded-md px-3 py-2 mb-3 outline-none"
//                 placeholder="Enter the Category..."
//                 value={taskCategory}
//                 onChange={(e) => {
//                   setTaskCategory(e.target.value);
//                 }}
//                 required
//               />
//               <div className="flex flex-col">
//                 <label className="mb-2">
//                   Due Date: <span className="text-red-700 font-medium">*</span>
//                 </label>
//                 <input
//                   type="date"
//                   className="border border-neutral-400 rounded-md px-3 py-1"
//                   value={dueDate}
//                   onChange={(e) => {
//                     setDueDate(e.target.value);
//                   }}
//                   required
//                 />
//               </div>
//               <div className="flex items-center justify-center pt-4">
//                 <button
//                   className="bg-green-500 w-20 h-20 flex items-center justify-center rounded-full text-white text-3xl hover:scale-110 hover:bg-green-600"
//                   onClick={addTaskHandler}
//                 >
//                   <FaPlus />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskScheduler;
