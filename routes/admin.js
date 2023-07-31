const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // console.log("In the Add product page middleware");
  res.send(
    "<form action='/products' method='POST'><input type='text' name='title' /><button type='submit'>Add products</button></form>"
  );
});

router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
