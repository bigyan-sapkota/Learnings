import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// NOTE: Using Promises

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h1>My data</h1>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
