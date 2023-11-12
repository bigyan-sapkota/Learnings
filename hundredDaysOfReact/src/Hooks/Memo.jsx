import React from "react";
import { useState, useMemo } from "react";
import { initialItems } from "./utils";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Items: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)} className="btn">
        Increment
      </button>
    </div>
  );
};

export default Memo;
