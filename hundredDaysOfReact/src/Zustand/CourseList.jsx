import React from "react";
import useCourseStore from "./courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item text-black`}
                style={{
                  backgroundColor: course.completed ? "#00ff0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span>{course?.title}</span>
                <button
                  className="delete btn"
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
