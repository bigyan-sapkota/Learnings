// Write a function which receives a string, and returns a Promise.
// The promise shouold resolve with the uppercase version of the string but should reject if the string is null

function asyncStringUpperCase(a) {
  return new Promise((resolve, reject) => {
    if (a !== null) {
      resolve(a.toUpperCase());
    } else {
      reject("The string is null");
    }
  });
}

asyncStringUpperCase("bigyan")
  .then((result) => {
    console.log("The uppercase is:", result);
  })
  .catch((error) => {
    console.log("Error message:", error);
  });
