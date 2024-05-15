const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const { authenticateToken } = require("./authRoutes");

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(404).json({ message: "blog not found" });
  }
});

// Create a new blog
router.post("/create", authenticateToken, async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    gallery: req.body.gallery,
    refLinks: req.body.refLinks,
    category: req.body.category,
    language: req.body.language,
  });
  try {
    const newblog = await blog.save();
    res.status(201).json(newblog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a blog
router.delete("/delete/:id", authenticateToken, async (req, res) => {
  try {
    const status = await Blog.findByIdAndDelete(req.params.id);
    res.json(status ? "Successfully deleted" : "Error happened");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Edit blog
router.put("/edit/:id", authenticateToken, async (req, res) => {
  try {
    const status = await Blog.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      gallery: req.body.gallery,
      refLinks: req.body.refLinks,
      category: req.body.category,
      language: req.body.language,
    });
    res.json(status ? "Successfully Updated" : "error happened");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
