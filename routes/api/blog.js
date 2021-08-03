const express = require("express");
const router = express.Router();

const { postBlog, getBlog } = require("../../controllers/blog");

router.post("/", postBlog);
router.get("/", getBlog);

module.exports = router;
