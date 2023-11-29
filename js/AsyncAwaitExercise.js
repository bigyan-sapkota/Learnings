// Write an async function which waits 500 milliseconds and then reutrns the uppercase of a given string. Use{ the sleep funciton provided

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function upperCaseStringProvider(a) {
  await sleep(500);

  return a.toUpperCase();
}

upperCaseStringProvider("bigyan").then((result) => {
  console.log("The uppercase form is:", result);
});
