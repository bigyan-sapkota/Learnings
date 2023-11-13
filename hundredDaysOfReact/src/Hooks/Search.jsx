import React from "react";
import { memo } from "react";

const Search = ({ onChange }) => {
  console.log("Search rendered");
  return (
    <div>
      <input
        type="text"
        placeholder="Search Users..."
        onChange={(e) => onChange(e.target.value)}
        className="inpt ml-2"
      />
    </div>
  );
};

export default memo(Search);
