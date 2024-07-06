import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import Test from "./models/test.js";
dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.post("/test", async (req, res) => {
  const { name, desc } = req.body;
  const test = new Test({ name, desc });
  test.save();
  res.status(201).json({ message: "Data saved", data: test });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
