import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import testContoller from "./controllers/testController.js";
import testContoller2 from "./controllers/testController2.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/addtest", testContoller);
app.use("/api/viewtest", testContoller2);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
