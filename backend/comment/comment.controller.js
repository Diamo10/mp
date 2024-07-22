import express from "express";
import isValidUser from "../middleware/auth.middleware.js";
import Comment from "./comment.model.js";
import Project from "../project/project.model.js";
const router = express.Router();
//get the comment on the project
router.get("/:id", isValidUser, async (req, res) => {
  try {
    const id = req.params.id; //project id
    const comment = await Comment.find({ commentedOn: id });
    res
      .status(200)
      .send({ message: "Comment fetched Sucessfully", comment: comment });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: "Errr" });
  }
});
//post comment on the project
router.post("/post/:id", isValidUser, async (req, res) => {
  try {
    const projectId = req.params.id; // project id
    const { comment } = req.body; // comment content
    const userId = req.user._id; // user id from the middleware

    // Check if the project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).send({ message: "Project not found" });
    }

    // Create and save the new comment
    const newComment = new Comment({
      comment,
      commentedBy: userId,
      commentedOn: projectId,
    });

    await newComment.save();
    res
      .status(200)
      .send({ message: "Commented sucessfully", comment: newComment });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: "Errr" });
  }
});
//update comment on the project
router.put("/update/:id/:cmtid", isValidUser, async (req, res) => {
  try {
    const id = req.params.id;
    const cmtid = req.params.cmtid;
    const { comment } = req.body;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).send({ message: "Project not found" });
    }
    const findComment = await Comment.findById(cmtid);
    console.log(findComment);
    if (!findComment) {
      return res.status(404).send({ message: "No Comment exist" });
    }
    const updatedComment = await Comment.findByIdAndUpdate(
      cmtid,
      { comment },
      {
        new: true,
      }
    );
    res
      .status(200)
      .send({ message: "Comment Updated sucessfully", updatedComment });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: "Errr" });
  }
});
//delete comment on the project
router.delete("/delete/:id/:cmtid", isValidUser, async (req, res) => {
  try {
    const id = req.params.id;
    const cmtid = req.params.cmtid;
    const user = req.user;
    const findComment = await Comment.findById(cmtid);
    if (!findComment) {
      return res.status(404).send({ message: "No Comment exist" });
    }
    await Comment.findByIdAndDelete(cmtid);
    res.status(200).send({ message: "Comment Deleted  sucessfully" });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: "Errr" });
  }
});

export default router;
