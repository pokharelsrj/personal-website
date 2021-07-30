const express = require("express");
const router = express.Router();
const { loginGoogle } = require("../../controllers/login");

//Import Controllers

router.post("/", loginGoogle);

module.exports = router;
