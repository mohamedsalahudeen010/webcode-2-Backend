import express from "express";
import { Admin, generateAuthToken } from "../models/admin.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let Users = await Admin.findOne({ email: req.body.email });
    if (Users) return res.status(409).json({ message: "Email already exist" });

    // generate password

    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(req.body.password, salt);

    // new password updation
    Users = await new Admin({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hasedPassword,
    }).save();

    const token = generateAuthToken(Users._id);
    res.status(201).json({ message: "Successfully signed up", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export const adminSignupRouter = router;
