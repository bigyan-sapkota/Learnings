// // When retrieving information from the server using the fetch command we can use promises

// function sumAsync(x, y) {
//   console.log("1. sumAsync is executed");

//   const p = new Promise((resolve, reject) => {
//     // run this in 500ms form now
//     setTimeout(() => {
//       console.log("4.Resolving sumAsync's Promise with the result after 500ms");
//       resolve(x + y);
//     }, 500);
//     //   We don't need to return anything
//     console.log("2. sumAsync is being initialized");
//   });

//   console.log("3. sumAsync has returned the Promise ");
//   return p;
// }

// //lets use the function noew
// sumAsync(5, 7).then((result) => {
//   console.log("5. The result of the addition is:", result);
// });

// REJECTING PROMISES
// In a synchronous flow, if we want to tell the user that something went wrong so he/she can catch an exception, we throw an exception using the throw argument. When using promises, we need to trigger the reject function insted.

function sumAsync(x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x < 0 || y < 0) {
        reject("Negative value/s received");
      } else {
        resolve(x + y);
      }
    }, 500);

    // we don't need to return
  });
}

sumAsync(-5, 7)
  .then((result) => {
    console.log("The result of the addition is:", result);
  })
  .catch((error) => {
    console.log("Error received:", error);
  });
