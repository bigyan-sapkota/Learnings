"use client";
import React, { useState } from "react";

const page = () => {
  const [userName, setUserName] = useState("");

  return (
    <>
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
      </form>
    </>
  );
};

export default page;
