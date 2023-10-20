"use client";
import React, { useState } from "react";

const page = () => {
  const [marks, setMarks] = useState(80);
  return (
    <>
      <h1>My marks is: {marks}</h1>
      <button
        onClick={() => setMarks(33)}
        className="text-white bg-black px-2 py-2 rounded"
      >
        Update
      </button>
    </>
  );
};

export default page;
