const express = require("express");
const router = express.Router();

const { dummy } = require("../../controllers/dummy");

router.post("/", dummy);

module.exports = router;
