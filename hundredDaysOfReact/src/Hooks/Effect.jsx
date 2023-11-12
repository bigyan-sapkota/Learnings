// DAY-2
// import { useState, useEffect } from "react";

// const Effect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // The code we want to run
//     console.log("The count is:", count);
//     // Optional return function

//     return () => {
//       console.log("I am being cleaned up");
//     };
//   }, [count]);
//   //   The next one is the dependencies array

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button
//         onClick={() => setCount(count - 1)}
//         className="px-10 py-2 bg-purple-600 rounded text-white mr-10"
//       >
//         Decrease
//       </button>
//       <button
//         onClick={() => setCount(count + 1)}
//         className="px-10 py-2 bg-purple-600 rounded text-white"
//       >
//         Increase
//       </button>
//     </div>
//   );
// };

// export default Effect;

// DAY-1
// import React from "react";
// import { useState, useEffect } from "react";

// const Effect = () => {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPost(data))
//       .catch((error) => console.error("Error message:", error));
//   }, []);

//   return (
//     <div>
//       {post.map((items, i) => {
//         return <div key={i}>{items.title}</div>;
//       })}
//     </div>
//   );
// };

// export default Effect;
// import React from "react";
// import { useEffect, useState } from "react";

// const Effect = () => {
//   const [post, setPost] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPost(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       {post.map((items, i) => (
//         <div key={i}>{items.title}</div>
//       ))}
//     </div>
//   );
// };

// export default Effect;
