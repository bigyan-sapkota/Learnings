import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// NOTE: Using Promises
// const [data, setData] = useState([]);
// const [isError, setIsError] = useState("");
// useEffect(() => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/poss")
//     .then((res) => setData(res.data))
//     .catch((error) => setIsError(error.message));
// }, []);

// NOTE: Using Async

function App() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  return (
    <>
      <h1>My data</h1>
      {isError !== "" && <h3>{isError}</h3>}
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
