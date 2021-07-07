const express = require("express");
const router = express.Router();

//Import Controllers

router.get("/", function (req, res) {
  res.send("Hi");
});

module.exports = router;
