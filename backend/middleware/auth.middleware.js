import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../user/user.model.js";
dotenv.config();

const isValidUser = async (req, res, next) => {
  // extract token from req.headers
  const authorization = req.headers.authorization;
  const splittedArray = authorization?.split(" ");
  const token = splittedArray?.length === 2 ? splittedArray[1] : null;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized." });
  }

  let payload;
  try {
    payload = jwt.verify(token, process.env.secretkey);
  } catch (error) {
    return res.status(400).send({ message: "Unauthorized." });
  }

  // find admin using email from payload
  const user = await User.findOne({ email: payload });

  // if not admin, throw error
  if (!user) {
    return res.status(401).send({ message: "Unauthorized." });
  }
  req.user = user;

  next();
};

export default isValidUser;
