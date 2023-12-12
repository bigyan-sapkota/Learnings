import React from "react";
import { Person } from "./Person";

export const PedroTech = () => {
  return (
    <div>
      <div>
        <Person
          name="Bigyan"
          email="bigyansapkota@gmail.com"
          age={21}
          isMarried={false}
          friends={["Bigyan", "Sapkota", "has", "no", "friends"]}
        />
      </div>
    </div>
  );
};

export default PedroTech;

// import React from "react";
// import { useCounter } from "./useCounter";
// import { useState } from "react";

// const PedroTech = () => {
//   const [count, inc, dec, res] = useCounter(5);
//   return (
//     <div>
//       {count}
//       <button onClick={inc}>Incerease</button>
//       <button onClick={dec}>Decrease</button>
//       <button onClick={res}>Reset</button>
//     </div>
//   );
// };

// export default PedroTech;
// import React, { useState } from "react";
// import { useToggle } from "./useToggle";

// const PedroTech = () => {
//   const [isVisible, toggle] = useToggle();
//   return (
//     <div>
//       <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
//       {isVisible && <h1>Hidden text</h1>}
//     </div>
//   );
// };

// export default PedroTech;

// import React from "react";
// import * as yup from "yup";
// import "../index.css";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// const PedroTech = () => {
//   const schema = yup.object().shape({
//     fullName: yup.string().required("Your Full Name is required"),
//     email: yup.string().email().required(),
//     age: yup.number().positive().integer().min(18).required(),
//     password: yup.string().min(4).max(20).required(),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "Passwords don't match")
//       .required(),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form className="flex" onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="Full Name..." {...register("fullName")} />
//       <p className="text-red">{errors.fullName?.message}</p>
//       <input type="text" placeholder="Email..." {...register("email")} />
//       <p className="text-red">{errors.email?.message}</p>
//       <input type="number" name="" placeholder="Age..." {...register("age")} />
//       <p className="text-red">{errors.age?.message}</p>
//       <input
//         type="password"
//         placeholder="Password..."
//         {...register("password")}
//       />
//       <p className="text-red">{errors.password?.message}</p>
//       <input
//         type="password"
//         placeholder="Confirm Password..."
//         {...register("confirmPassword")}
//       />
//       <p className="text-red">{errors.confirmPassword?.message}</p>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// };

// export default PedroTech;

// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import Contact from "./pages/Contact";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const PedroTech = () => {
//   const client = new QueryClient();

//   return (
//     <QueryClientProvider client={client}>
//       <div>
//         <BrowserRouter>
//           <div>
//             <Link to="/">Home</Link>
//             <Link to="/menu">Menu</Link>
//             <Link to="/contact">Contact</Link>
//           </div>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/menu" element={<Menu />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<pre>Error 404 Page Not Found</pre>} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </QueryClientProvider>
//   );
// };

// export default PedroTech;
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
