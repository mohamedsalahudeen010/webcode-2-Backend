import express from "express";
import { User, generateAuthToken } from "../models/user.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "invalid credentials email" });
    }

    const passwordValidate = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordValidate) {
      return res.status(404).json({ message: "invalid credentials password" });
    }

    const authToken = generateAuthToken(user._id);

    res
      .status(200)
      .json({ message: "logged in successfully", user:user });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const loginRouter = router;
