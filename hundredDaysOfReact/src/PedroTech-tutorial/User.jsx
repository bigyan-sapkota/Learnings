import React from "react";

const User = (props) => {
  return (
    <div>
      {props.name} is {props.age} years old.
    </div>
  );
};

export default User;
