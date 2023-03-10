const postSchema = require("../models/post");
const profileSchema = require("../models/profile");
const userSchema = require("../models/users");

const createPost = async (req, res) => {
  const userId = req.params.id;
  const { title, company, description, responsibility, picturePath } = req.body;
  try {
    const personal = await profileSchema.findOne({ userId });
    const location = await userSchema.findOne({ _id: userId });
    const newPost = new postSchema({
      title,
      userId,
      company: personal.UserName,
      description,
      responsibility,
      picturePath,
      location: location.location,
      userPicturePath: personal.userImg,
    });
    const result = await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getPosts = async (req, res) => {
  try {
    const data = await postSchema.find({});
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, status: "Server Error", message: error.message });
  }
};
const getPostById = async (req, res) => {
  const userId = req.params.id;
  try {
    const data = await postSchema.find({ userId });
    if (!data) {
      res
        .status(404)
        .json({ success: false, message: "Sorry We Cant Find Your Request" });
    } else {
      res.status(200).json({
        success: true,
        post: data,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const updatePost = async (req, res) => {
  const _id = req.params.id;
  const { title, userId, company, description, responsibility } = req.body;
  try {
    const update = await postSchema.findByIdAndUpdate(
      { _id },
      { title, userId, company, description, responsibility },
      { new: true }
    );
    if (!update) {
      res.status(404).json("sorry we cant find your post");
    } else {
      res.status(200).json({ success: true, result: update });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, status: "Server Error", message: error.message });
  }
};
const deletePost = async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await postSchema.findByIdAndDelete({ _id });
    if (!result) {
      res.status(404).json({
        success: false,
        message: "oops,It Appears We Couldn't Find What You Looking For",
      });
    } else {
      res.status(202).json({
        success: true,
        message: "The Post Has Been Deleted Successfully",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, status: "Server Error", message: error.message });
  }
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
