// Use case of express :
// -> Routing(GET, POST, PUT, PATCH, DELETE),

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello!");
});

app.get("/profile", function (req, res) {
  res.send("This is your profile");
});

app.listen(3000);

// NPM contain many packages which can be used by us to save our time.
// nmp i <packageName> can be used to install a package.

// ONE LINER JOKE:
// var oneLinerJoke = require("one-liner-joke");
// console.log(oneLinerJoke.getRandomJoke());

// FIGLET:
// var figlet = require("figlet");
// figlet("B I G YA N", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// var a = 12;
// module.exports = a;
