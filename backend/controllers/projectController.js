import express from "express";
import path from "path";
import multer from "multer";
import Project from "../models/project.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

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
router.post(
  "/add",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),
  async (req, res) => {
    try {
      // Get project details from request body
      const { title, desc } = req.body;
      console.log(thumbnail);
      // Get uploaded thumbnail image details from req.files
      const thumbnailFiles = req.files["thumbnail"];
      const thumbnailPath = thumbnailFiles ? thumbnailFiles[0].path : null;

      // Get uploaded images details from req.files
      const imageFiles = req.files["images"];
      const imagePaths = imageFiles ? imageFiles.map((file) => file.path) : [];

      // Create a new Project object
      const newProject = new Project({
        title,
        desc,
        thumbnailPath,
        imagePaths, // Store paths to the uploaded images in the database
      });

      // Save the project to the database
      await newProject.save();

      return res.status(200).send("Project uploaded successfully");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  }
);

export default router;
