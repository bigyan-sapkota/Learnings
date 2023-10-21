"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return <div>{JSON.stringify(users)}</div>;
};

export default page;
