import express from "express";
import Test from "../models/test.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const testData = await Test.find();
  return res.status(200).send(testData);
});

export default router;
