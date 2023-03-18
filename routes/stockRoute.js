import express from "express";
import Stock from "../models/stock.js"

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const postDate = new Date().toJSON().slice(0, 10);

    const content = await new Stock({
      ...req.body,
      date: postDate
    }).save();

    if (!content) {
      return res.status(400).json({ message: "error in sending content" });
    }
    return res.status(200).json({ message: "content sent successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    // const content=await Content.find().populate("user")
    const content = await Stock.find();
    // .populate("user", "name")
    if (!content) {
      return res.status(400).json({ message: "Couldn'nt fetch your content" });
    }
    return res.status(200).json(content);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const updatedContent = await Stock.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedContent) {
      return res.status(400).json({ message: "Couldn'nt update your content" });
    }
    return res.status(200).json(updatedContent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteContent = await Stock.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!deleteContent) {
      return res.status(400).json({ message: "Couldn'nt delete your content" });
    }
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export const stockRouter = router;
