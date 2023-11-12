import React from "react";
import { useState } from "react";
import Search from "./Search";

const allUsers = ["john", "alex", "george", "simon", "james"];

const Callback = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = (text) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  };

  const shuffle = (array) => {
    const shuffledArray = [...array]; // Create a copy to avoid mutating the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="m-10">
      <div className="align-center mb-2 flex">
        <button onClick={() => setUsers(shuffle(allUsers))} className="btn">
          Shuffle
        </button>
        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Callback;
