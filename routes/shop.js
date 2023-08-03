const path = require("path");

const express = require("express");
const dirname = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("In the another middleware");
  //   res.setHeader(); we can override this also
  // res.send("<h1>Hello from express!</h1>");
  res.sendFile(path.join(dirname, "views", "shop.html"));
  // https://github.com/expressjs/express/blob/master/lib/response.js
});

module.exports = router;
