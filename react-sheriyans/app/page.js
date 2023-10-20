"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";

const page = () => {
  const [user, setUser] = useState("Bigyan");
  const [editor, setEditor] = useState("Aakash");
  return (
    <>
      <Header user={user} editor={editor} />
      {user}
    </>
  );
};

export default page;
