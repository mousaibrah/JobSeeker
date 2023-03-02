const postSchema = require("../models/post");

const createPost = async (req, res) => {
  const { title, userId, company, description, responsibility } = req.body;
  const newPost = new postSchema({
    title,
    userId,
    company,
    description,
    responsibility,
  });
  try {
    const result = await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createPost };
