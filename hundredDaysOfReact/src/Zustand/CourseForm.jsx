import React, { useState } from "react";
import useCourseStore from "./courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState("");
  console.log("CourseFrom Rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please add a course title.");
    addCourse({ id: Math.floor(Math.random() * 1000000), title: courseTitle });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
      />
      <button
        className="form-submit-btn"
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
