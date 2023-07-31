// const http = require("http");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
/*
app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // next allows request to continue on next middleware
}); // 'use' allows us to add middleware functions

*/ // https://expressjs.com/en/4x/api.html#app.use

// app.use("/", (req, res, next) => {
//   // console.log("this always runs");
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  // console.log("In the Add product page middleware");
  res.send(
    "<form action='/products' method='POST'><input type='text' name='title' /><button type='submit'>Add products</button></form>"
  );
});

app.use("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  // console.log("In the another middleware");
  //   res.setHeader(); we can override this also
  res.send("<h1>Hello from express!</h1>");
  // https://github.com/expressjs/express/blob/master/lib/response.js
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); // https://github.com/expressjs/express/blob/master/lib/application.js
