import mongoose from "mongoose";

export const createConnectionDB = () => {
  const params = {
    useNewUrlParse: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("mongoose is connected");
  } catch (error) {
    console.log("Mongoose Connection Error:", error);
  }
};
