const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  gallery: { type: Array, require: true },
  refLinks: { type: Array, required: false },
  category: { type: String, require: true },
  language: { type: String, required: true },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
