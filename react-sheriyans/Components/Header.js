import React from "react";

const Header = (props) => {
  return (
    <div className="px-5 h-14 bg-green-600 flex items-center justify-between">
      <h2 className="text-2xl font-bold">{props.user}</h2>
      <div className="flex gap-4">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <pre>{props.editor}</pre>
      </div>
    </div>
  );
};

export default Header;
