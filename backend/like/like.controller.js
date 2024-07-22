import express from "express";
import isValidUser from "../middleware/auth.middleware.js";
import Like from "./like.model.js";
const router = express.Router();
//get the like on the project
router.get("/:id", isValidUser, async (req, res) => {
  try {
    const id = req.params.id;
    const like = await Like.findOne({ likedOn: id });
    res.status(200).send(like);
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: "Errr" });
  }
});
//post like on the project
router.post("/post/:id", isValidUser, async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user;
    const newComment = new Like({ likedOn: id, likedBy: user._id });
    await newComment.save();
    res.status(200).send({ message: "liked sucessfully" });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: "Errr" });
  }
});
//update like on the project

//delete like on the project
router.delete("/delete/:id/:likeid", isValidUser, async (req, res) => {
  try {
    const id = req.params.id;
    const likeid = req.params.likeid;
    const user = req.user;
    const findComment = await Like.findById(likeid);
    if (!findComment) {
      return res.status(404).send({ message: "No Like exist" });
    }
    await Like.findByIdAndDelete(likeid);
    res.status(200).send({ message: "Like deleted sucessfully" });
  } catch (err) {
    console.log(err);
    return res.status(404).send({ message: "Errr" });
  }
});

export default router;
