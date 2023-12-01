import React from "react";
import useBearStore from "./bearsStore";

const Bear = () => {
  const bears = useBearStore((state) => state.bears);
  return (
    <div>
      <p>Here are {bears} around here.</p>
    </div>
  );
};

export default Bear;
