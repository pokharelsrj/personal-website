const Blog = require("../models/Blog");

const postBlog = async (req, res) => {
  const newBlog = new Blog({
    content: req.body.content,
    date: req.body.date,
  });
  try {
    await newBlog.save();
    res.json(newBlog);
  } catch (err) {
    console.log(err.message);
  }
};

const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { postBlog, getBlog };
