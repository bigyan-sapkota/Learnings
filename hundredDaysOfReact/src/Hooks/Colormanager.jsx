import React, { useState } from "react";

const Colormanager = () => {
  const [colors, setColors] = useState(["#111111", "#ffffff", "#f40d0d"]);
  const [newColor, setNewColor] = useState("");
  const [error, setError] = useState("");

  const addColor = (newColor) => {
    const colorExists = colors.includes(newColor);

    if (colorExists) {
      setError("Color already used");
    } else {
      setColors([...colors, newColor]);
    }
  };

  const removeColor = (i) => {
    const updatedColor = [...colors];
    updatedColor.splice(i, 1);
    setColors(updatedColor);
  };

  return (
    <div className="m-10">
      <div className="font-extrabold text-4xl mb-7">Colors List:</div>
      <div className="flex flex-col gap-4">
        {colors.map((color, i) => (
          <div
            key={i}
            className="flex align-center justify-between p-4 border border-gray-400 rounded-md w-1/4 shadow-lg"
          >
            <div
              className="h-5 w-5 border-2 border-black"
              style={{
                backgroundColor: `${color}`,
              }}
            ></div>
            <div className="font-bold">{color}</div>
            <button
              className="bg-red-600 px-3 py-1 text-white font-normal rounded-md"
              onClick={() => removeColor(i)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="font-extrabold text-4xl my-7">Add Colors:</div>
      <div>
        <input
          type="text"
          className="border border-black mb-4 w-1/4 pl-2 py-2"
          value={newColor}
          onChange={(e) => {
            setNewColor(e.target.value);
          }}
        />
        <div className="text-[#ff0000] font-bold flex gap-1">
          <div className="underline">{error == "" ? null : "Note:"}</div>
          {error}
        </div>
        <br />
        <button
          className="bg-green-600 px-3 py-1 text-white font-normal rounded-md"
          onClick={() => addColor(newColor)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Colormanager;
