// import React, { useRef, useEffect } from "react";

// const MyRef = () => {
//   const inputRef = (useRef < HTMLInputElement) | (null > null);

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   return (
//     <div>
//       <input
//         type="text"
//         ref={inputRef}
//         placeholder="Type something..."
//         className="inpt"
//       />
//     </div>
//   );
// };

// export default MyRef;

// import React from "react";
// import { useRef, useState } from "react";

// const Myref = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const handleIncrement = () => {
//     // setCount(count + 1);
//     countRef.current++;

//     // console.log("State:", count);
//     console.log("Ref:", countRef.current);
//   };

//   return (
//     <div>
//       Count:{countRef.current}
//       <br />
//       <button className="btn" onClick={handleIncrement}>
//         Inc
//       </button>
//     </div>
//   );
// };

// export default Myref;
