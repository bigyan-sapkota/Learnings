import React from "react";
import ReactDOM from "react-dom/client";

// CHANGING STATE:
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
  }
  // changing color

  changeColor = () => {
    this.setState({ color: "red" });
  };

  render() {
    return (
      <div>
        <h1>It is a {this.state.color} colored car.</h1>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);

// class Car extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>MY {this.state.brand}</h1>
//         <p>It is a {this.state.model}</p>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// CREATING STATE

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       color: "Blue",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>My car is {this.state.color}</h1>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// import Car from "./Car";

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.color} car!</h2>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car color="red" />);

// props in constructor

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <h2>I am a {this.props.model}</h2>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car model="Mustang" />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// function Car() {
//   return <h2>I am a Car!</h2>;
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Garage />);

// function Car(props) {
//   return <h2> I am a {props.color} colored car!</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car color="red" />);

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

// const x = 4;
// const text = "Hello World!";
// const myElement = <h1>{x > 3 ? text : "Goodbye"}</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

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
