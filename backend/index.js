import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import projectController from "./project/project.controller.js";
import userContoller from "./user/user.controller.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/project", projectController);
app.use("/api/user/", userContoller);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
