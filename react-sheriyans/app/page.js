"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    getImages;
  }, []);

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

      <div className="p-10">
        {Images.map((img, i) => (
          <div key={i}>
            <img
              src={img.download_url}
              alt=""
              width={300}
              height={300}
              className="m-10 rounded-lg inline-block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
