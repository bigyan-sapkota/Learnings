"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [Images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const myData = response.data;
      setImages(myData);
    } catch (error) {
      console.log("Error Fetching Images");
    }
  };

  return (
    <div>
      <button
        onClick={getImages}
        className="mt-4 ml-4 px-5 py-3 bg-green-600 text-white rounded"
      >
        Get Images
      </button>

      <div>
        {Images.map((img, i) => (
          <div key={i}>{img.author}</div>
        ))}
      </div>
    </div>
  );
};

export default page;
