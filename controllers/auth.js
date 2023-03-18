import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const isSignedIn = async (req, res, next) => {
  let token;
  if (req.headers) {
    try {
      token = req.headers["x-auth-token"];
      const decode = jwt.verify(token, process.env.SECRET_CODE);
      console.log(decode);
      req.user = await User.findById(decode.id).select("-password");
      // console.log(req.user)
      next();
      // .select("-password")
    } catch (error) {
      return res.status(401).json({ message: "Invalid Authorization" });
    }
  }
  if (!token) return res.status(400).json({ message: "Access denied" });
};

export { isSignedIn };
