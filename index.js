import express from "express";
import cors from "cors";
import { createConnectionDB } from "./DB.js";
import dotenv from "dotenv";
import { loginRouter } from "./routes/loginRouter.js";
import { signupRouter } from "./routes/signupUsersRouter.js";
import { adminLoginRouter } from "./routes/adminLoginRouter.js";
import { adminSignupRouter } from "./routes/adminSignUpRouter.js";
import { forgetPasswordRouter } from "./routes/forgetPassword.js";
import { productsRouter } from "./routes/productRouter.js";
import { stockRouter } from "./routes/stockRoute.js";
dotenv.config();
createConnectionDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/webcode/signup", signupRouter);
app.use("/webcode/login", loginRouter);
app.use("/webcode/admin", adminLoginRouter);
app.use("/webcode/admin/signUp", adminSignupRouter);
app.use("/webcode/forgetPassword", forgetPasswordRouter);
app.use("/webcode/products", productsRouter);
app.use("/webcode/stock",stockRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Successfully  hoisted in ${PORT} Port WebCode`);
});

app.get("/", (req, res) => {
  res.send(`Successfully  hoisted in ${PORT} Port WebCode`);
});
