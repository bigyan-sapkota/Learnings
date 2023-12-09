import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

const CatFact = () => {
  const [catFact, setCatFact] = useState("");
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div>
      <div>
        <p>{catFact}</p>
        <button onClick={fetchCatFact}>Get Fact</button>
      </div>
    </div>
  );
};

export default CatFact;
