import React from "react";
import Dropzonea from "./Dropzonea";

const MyDropzoneComponent = () => {
  return (
    <section className="section m-10">
      <div className="container">
        <h1 className="title text-3xl font-bold">Upload files</h1>
        <Dropzonea className="p-16 mt-10 border border-neutral-200" />
      </div>
    </section>
  );
};

export default MyDropzoneComponent;
