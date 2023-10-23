// Node vs Express - Node is the main thing where we run express code. Express JS helps to code
// in easier way. HTTP is difficult to use, so express is used to make it easier.

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

// Middleware - The function which runs/executes code just before routing.
// The problem in node Js middleware is that, once a middleware takes control it won't go to another route/middlware. So for pushing the contorl to next route next() is used.
// Req contains all the incoming request data like location, device details.
// Res cotnains the data that is given to client by the server.
// app.use(function (req, res, next) {
//   console.log("Middleware 1.");
//   next();
// });

// app.use(function (req, res, next) {
//   console.log("Mdidleware 2.");
//   next();
// });

// Routing
app.get("/", function (req, res) {
  res.render("index", { age: 12 });
});

// TEMPLATE ENGINE(a markup style which will later gets converted into HTML.) like ejs can be used as HTML
app.get("/contact", function (req, res) {
  res.render("contact", { name: "Bigyan" });
});

app.get("/error", function (req, res, next) {
  throw Error("Something went wrong.");
});
// app.get("/profile", function (req, res) {
//   res.send("Hello from profile");
// });

// Error Handling:

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);

// Dynamic Route- A routing in which, some part remains same and some becomes different.
// Use : at the place where you want to make it dynamic, and use req.params to access the value
// app.get("/profile/:username", function (req, res) {
//   res.send(`Hello from ${req.params.username}`);
// });

// app.get("/cart/:product", function (req, res) {
//   res.send(`Your products are: <br/> <ol><li>${req.params.product}</li></ol>`);
// });

// NON DYNAMIC:
// app.get("/profile/bigyan", function (req, res) {
//   res.send("Hey I am Bigyan.");
// });
