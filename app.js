// const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // next allows request to continue on next middleware
}); // 'use' allows us to add middleware functions

app.use((req, res, next) => {
  console.log("In the another middleware");
  //   res.setHeader(); we can override this also
  res.send("<h1>Hello from express!</h1>");
  // https://github.com/expressjs/express/blob/master/lib/response.js
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); // https://github.com/expressjs/express/blob/master/lib/application.js
