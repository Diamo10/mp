import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import projectController from "./controllers/projectController.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/project", projectController);

console.log("hello world");
console.log("working on branch");


app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
