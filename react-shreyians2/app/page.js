"use client";
import Header from "@/Components/Header";
import { MyContext } from "@/Helper/Context";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";

const page = () => {
  const user = useContext(MyContext);

  return (
    <>
      <Header />
      {user}
    </>
  );
};

export default page;

{
  /* TWO WAY BINIDING 
  const [userName, setUserName] = useState("");
<h1 className="text-xl">Form</h1>
      <form>
        <input
          type="text"
          placeholder="Enter the text..."
          className="border border-black px-4 py-2 text-xl"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            console.log(e.target.value);
          }}
        />
      </form> */
}

{
  /* <h1 className="text-2xl font-bold">This is Home Page.</h1>
      <Link href="/Contact">Contact</Link> */
}

// const [users, setUsers] = useState([]);
//   const getUsers = async () => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     setUsers(data);
//   };
//   useEffect(() => {
//     getUsers();
//   }, []);
//   return (
//     <>
//       <button
//         className="bg-green-500 text-white rounded px-3 py-2 font-medium"
//         onClick={getUsers}
//       >
//         Get Data
//       </button>
//       <div className="p-8 bg-slate-500 mt-5">
//         <ol>
//           {users.map((user, i) => {
//             return (
//               <li key={i}>
//                 {user.name} --- <a href={`/${user.id}`}>Explore</a>
//               </li>
//             );
//           })}
//         </ol>
//       </div>
//     </>
//   );
