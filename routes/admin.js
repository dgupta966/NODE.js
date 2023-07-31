const express = require("express");

const router = express.Router();

// /admin/add-product -> GET
router.get("/add-product", (req, res, next) => {
  // console.log("In the Add product page middleware");
  res.send(
    "<form action='/admin/add-product' method='POST'><input type='text' name='title' /><button type='submit'>Add products</button></form>"
  );
});

// /admin/add-product -> POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
