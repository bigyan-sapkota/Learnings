// Use case of express :
// -> Routing(GET, POST, PUT, PATCH, DELETE),

const express = require("express");
const app = express();

// Middleware is a function which runs before route. So if you want to run something before route, you can use middleware.
// If middleware keeps running, the router gets jammed and there is problem in routing. So next() is used
app.use(function (req, res, next) {
  console.log("Hello from MiddleWare!");
  //   This next is to move to second middleware
  next();
});

app.use(function (req, res, next) {
  console.log("Middleware 2!");
  next();
});

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
