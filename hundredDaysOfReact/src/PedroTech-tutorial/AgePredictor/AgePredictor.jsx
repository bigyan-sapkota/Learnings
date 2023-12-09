import React, { useState, useEffect } from "react";
import Axios from "axios";

const AgePredictor = () => {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age : {predictedAge?.age}</h1>
      <h1>Name : {predictedAge?.name}</h1>
      <h1>Count : {predictedAge?.count}</h1>
    </div>
  );
};

export default AgePredictor;
