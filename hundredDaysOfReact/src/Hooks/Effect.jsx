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
