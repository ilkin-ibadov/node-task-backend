const express = require("express");
const router = express.Router();
const project = require("../models/project");
const { authenticateToken } = require("./authRoutes");

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get project by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await project.findById(req.params.id);
    res.json(project);
  } catch (err) {
    res.status(404).json({ message: "project not found" });
  }
});

// Create a new project
router.post("/create", authenticateToken, async (req, res) => {
  const project = new project({
    title: req.body.title,
    description: req.body.description,
    gallery: req.body.gallery,
    playStoreLink: req.body.playStoreLink,
    appStoreLink: req.body.appStoreLink,
    domain: req.body.domain,
    projectType: req.body.projectType,
    githubLink: req.body.githubLink,
  });
  try {
    const newproject = await project.save();
    res.status(201).json(newproject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a project
router.delete("/delete/:id", authenticateToken, async (req, res) => {
  try {
    const status = await project.findByIdAndDelete(req.params.id);
    res.json(status ? "Successfully deleted" : "Error happened");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Edit project
router.put("/edit/:id", authenticateToken, async (req, res) => {
  try {
    const status = await project.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      gallery: req.body.gallery,
      playStoreLink: req.body.playStoreLink,
      appStoreLink: req.body.appStoreLink,
      domain: req.body.domain,
      projectType: req.body.projectType,
      githubLink: req.body.githubLink,
    });
    res.json(status ? "Successfully Updated" : "error happened");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
