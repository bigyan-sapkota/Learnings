import React from "react";

const PedroTech = () => {
  return <div>PedroTech</div>;
};

export default PedroTech;

// import React from "react";
// import { useState, useEffect } from "react";
// import Text from "./Text";

// const PedroTech = () => {
//   const [showText, setShowText] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setShowText(!showText);
//         }}
//       >
//         Show Text
//       </button>
//       {showText && <Text />}
//     </div>
//   );
// };

// export default PedroTech;
// const [textcolor, setTextcolor] = useState("black");

//   const changeHandler = () => {
//     setTextcolor(textcolor === "black" ? "red" : "black");
//   };

//   return (
//     <div>
//       <h1 style={{ color: textcolor }}>Hi I am Bigyan</h1>
//       <button onClick={changeHandler}>Change</button>
//     </div>
//   );

// import React from "react";
// import styles from "../Bigyan.module.css";

// const Job = ({ salary, position, company }) => {
//   return (
//     <div>
//       <p>
//         Hey I am working at {company} with annual salray ${salary}
//         at {position}.
//       </p>
//     </div>
//   );
// };

// const PedroTech = () => {
//   return (
//     <section className={styles.bigyan}>
//       <Job salary={90000} position="Senior SDE" company="Amazon" />
//       <Job salary={120000} position="CEO" company="Netflix" />
//       <Job salary={65} position="Teacher" company="Tution" />
//     </section>
//   );
// };

// export default PedroTech;

// import React from "react";

// const PedroTech = () => {
//   const age = 20;
//   const isGreen = false;

//   return (
//     <div>
//       {age >= 18 ? <p>Over 18</p> : <p>Under 18</p>}
//       <h1 style={{ color: isGreen ? "green" : "red" }}>
//         Did your assingnment.
//       </h1>
//     </div>
//   );
// };

// export default PedroTech;

// import React from "react";
// import User from "./User";

// const PedroTech = () => {
//   const users = [
//     { name: "Bigyan", age: 21 },
//     { name: "Sankalpa", age: 22 },
//     { name: "Chara", age: 2 },
//   ];
//   return (
//     <div>
//       <ul>
//         {users.map((user, i) => (
//           <User key={i} name={user.name} age={user.age} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PedroTech;

// import React from "react";
// import { useState } from "react";

// const PedroTech = () => {
//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     if (age == 5) {
//       setAge(5);
//     } else {
//       setAge(age + 1);
//     }
//   };

//   const decreaseAge = () => {
//     if (age == 0) {
//       setAge(0);
//     } else {
//       setAge(age - 1);
//     }
//   };

//   return (
//     <div>
//       {age}
//       <br />
//       <button onClick={increaseAge}>Increase age</button>
//       <button onClick={decreaseAge}>Decrease age</button>
//     </div>
//   );
// };

// export default PedroTech;

// const [name, setName] = useState("");

//   const handleInputChange = (event) => {
//     setName(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Your Name.."
//         value={name}
//         onChange={handleInputChange}
//       />
//       {name}
//     </div>
//   );
