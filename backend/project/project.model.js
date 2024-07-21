import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    project: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: String,
      required: true,
      trim: true,
    },
    like: {
      type: Number,
      required: true,
      trim: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    collaborator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      trim: true,
    },
    uploadeder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model("Project", projectSchema);
export default Project;
