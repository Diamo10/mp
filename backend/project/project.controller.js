import express from "express";
import isValidUser from "../middleware/auth.middleware.js";
import Project from "./project.model.js";
const router = express.Router();

//get Project
router.get("/list", isValidUser, async (req, res) => {
  try {
    const projectList = await Project.find();
    return res.status(200).send(projectList);
  } catch (err) {
    console.log("Erroe in Getting data");
    console.log(err);
    return res.status(404).send({ message: "Error is getting project list" });
  }
});
//get project by id
router.get("/:id", isValidUser, async (req, res) => {
  try {
    const projectList = await Project.findById(req.params.id);
    return res.status(200).send(projectList);
  } catch (err) {
    console.log("Erroe in Getting data");
    console.log(err);
    return res.status(404).send({ message: "Error is getting project list" });
  }
});
// Creating the Project
router.post("/", isValidUser, async (req, res) => {
  try {
    const project = req.body;
    const newProject = new Project(project);
    await newProject.save();
    return res
      .status(200)
      .send({ message: "Project created successfully", newProject });
  } catch (err) {
    console.log("Erroe in Getting data");
    console.log(err);
    return res.status(404).send({ message: "Error is getting project list" });
  }
});
//update the post
router.put("/edit/:id", isValidUser, async (req, res) => {
  try {
    const id = req.params.id;
    const project = req.body;
    const updateProject = await Project.findByIdAndUpdate(id, project, {
      new: true,
    });
    if (!updateProject) {
      return res.status(404).send({ message: "Project not found" });
    }
    return res
      .status(200)
      .send({ message: "Project edited successfully", updatedProject });
  } catch (err) {
    console.log("Erroe in Getting data");
    console.log(err);
    return res.status(404).send({ message: "Error is getting project list" });
  }
});
//deleting project
router.delete("/delete/:id", isValidUser, async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).send({ message: "Project not found" });
    }
    await Project.deleteOne({ _id: id });
    return res.status(200).send({ message: "Project deleted  successfully" });
  } catch (err) {
    console.log("Erroe in Getting data");
    console.log(err);
    return res.status(404).send({ message: "Error is getting project list" });
  }
});

export default router;
