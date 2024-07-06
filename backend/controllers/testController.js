import express from "express";
import Test from "../models/test.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, desc } = req.body;
  const test = new Test({ name, desc });
  test.save();
  res.status(201).json({ message: "Data saved", data: test });
});

export default router;
