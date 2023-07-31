// const http = require("http");

const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

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

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found !</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); // https://github.com/expressjs/express/blob/master/lib/application.js
