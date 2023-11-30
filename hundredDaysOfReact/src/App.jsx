import React from "react";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="main-container">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        {" "}
        My Course List
      </h1>
      <Main />
    </div>
  );
};

export default App;
