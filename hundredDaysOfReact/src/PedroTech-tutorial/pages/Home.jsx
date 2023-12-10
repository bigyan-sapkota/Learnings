import React from "react";
import { useContext } from "react";
import { AppContext } from "../PedroTech";

const Home = () => {
  const { username } = useContext(AppContext);
  return <div>This is the Home Page and the user is: {username}</div>;
};

export default Home;
