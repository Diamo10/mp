import express from "express";
import Project from "../models/project.js";

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const allProjects = await Project.find();
    return res.status(200).send(allProjects);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});

// Get a project by ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).send("Project not found");
    }
    return res.status(200).send(project);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});

// Add a new project with image uploads
router.post("/add", async (req, res) => {
  try {
    const { title, desc } = req.body;
    console.log(title, desc);
    return res.status(200).send("Project added successfully", +title, desc);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Database Error");
  }
});

export default router;
