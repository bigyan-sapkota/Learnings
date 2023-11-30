import React from "react";
import CourseForm from "../Zustand/CourseForm";
import CourseList from "../Zustand/CourseList";

const Main = () => {
  return (
    <div>
      <CourseList />
      <CourseForm />
    </div>
  );
};

export default Main;
