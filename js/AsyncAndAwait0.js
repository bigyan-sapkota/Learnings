// The await keyword is a special command which tells JavaScript to stop the execution of the current function until a Promsie, resolves, and then return the promise's value. It can be seen as an endless loop which checks if the promise has been resolved, and returns the value fo the resolved promise when it does.

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function sumAsync(x, y) {
//   return new Promise((resolve, reject) => {
//     sleep(500).then(() => {
//       resolve(x + y);
//     });
//   });
// }

// sumAsync(5, 7).then((result) => {
//   console.log("The reuslt of the addition is:", result);
// });

// Using await

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function sumAsync(x, y) {
  // This code waits here for 500 milliseconds
  await sleep(500);

  // Done waiting. Let's calculate and return the value
  return x + y;
}

// sumAsync is an async function which means it reutrns a Promise
sumAsync(2, 1).then((result) => {
  console.log("The result of the addition is:", result);
});
