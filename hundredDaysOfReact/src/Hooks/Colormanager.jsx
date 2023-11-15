import React, { useState } from "react";

const Colormanager = () => {
  const [colors, setColors] = useState(["#111111", "#ffffff", "#f40d0d"]);

  const addColor = () => {};

  const removeColor = () => {};

  return (
    <div className="m-10">
      <div className="flex flex-col gap-4">
        {colors.map((color, i) => (
          <div
            key={i}
            className="flex align-center justify-between p-4 border border-gray-400 rounded-md w-1/5 shadow-lg"
          >
            <div
              className="h-5 w-5 border-2 border-black"
              style={{
                backgroundColor: `${color}`,
              }}
            ></div>
            <div className="font-bold">{color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colormanager;
