import React from "react";
import ReactDOM from "react-dom/client";

// Not using jsx
// const myElement = React.createElement("h1", {}, "I am not using JSX!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

// Using jsx
// const myElement = <h1>I love JSX!</h1>;

// Expression in JSX
// const myElement = <h1>React is {5 + 5} times better with JSX.</h1>;

// Inserting a large block of code of HTML
// const myElement = (
//   <ul>
//     <li>Mango</li>
//     <li>Apple</li>
//     <li>Litchi</li>
//   </ul>
// );

// Using more Elements
// const myElement = (
//   <>
//     <div>
//       <p>I am the first paragraph.</p>
//       <p>I am the second paragraph.</p>
//       {/* Elements Must be closed */}
//       <input type="text" />
//     </div>
//   </>
// );

// const myElement = <h1 className="heading-1">Hi! I am the first heading..</h1>;

// Conditional Statements
// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }
// const myElement = <h1>{text}</h1>;

// Conditional Statemenst - Using ternary operator

const x = 4;
const text = "Hello World!";
const myElement = <h1>{x > 3 ? text : "Goodbye"}</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);

// const myElement = (
//   <table cellSpacing={0} cellPadding={10} border={1}>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>Bigyan</td>
//     </tr>
//     <tr>Mansa</tr>
//   </table>
// );

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(myElement);
