const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  gallery: { type: Array, require: true },
  playStoreLink: { type: String, required: false },
  appStoreLink: { type: String, required: false },
  domain: { type: String, required: false },
  projectType: { type: String, enum: ["web", "mobile", "backend"] },
  githubLink: { type: String, required: false },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
