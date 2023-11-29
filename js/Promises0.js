// Asynchronous code is a method of programming which enables different parts of code to run at changing times, instead immediately which is used to write ocde which does something with what the server returned

// function getServerStatus() {
//   const result = fetch("/server/status");

//   //   THIS WILL NOT WORK!
//   console.log("The status from the server is:", result.ok);
// }

// In JavaScript, most APIs which require waiting for a function to do something, are asynchronous by default which means that this code will not do what we think it wil do, since the fetch function is asynchronous, and therefore will return something which is not exactly the result, but eventually will be result. This "thing" which is returned from the fetch function is called #PROMISE in JavaScript.

// For making the above incorrect code to run we should use the following method:

// function getServerStatus() {
//   const result = fetch("/server/status");

//   result.then(function (status) {
//     console.log("The status is:", status.ok);
//   });
// }

// getServerStatus();

// A Promise is a native JavaScript object which has two traits: 1) It receives a single argument which is a function. The function needs to have two arguments, a resolve funcion and  a reject function. The code written inside the promise needs to use one of these two functions. 2) It can be waited on using the then method(and other similar method, or the await statement.
// An asynchronous function is defined by a function, which instead of returning the value it was supposed to return, it returns a Promise object, which will eventually resolve and give the user the answer.

// The function below returns a Promise instead of value:

function sumAsync(x, y) {
  const p = new Promise((resolve, reject) => {
    // this resolves the promise we just created
    resolve(x + y);
  });

  //   This returns the promise not value
  return p;
}

// Using the function
sumAsync(5, 7).then((result) => {
  console.log("The result of addition is", result);
});
