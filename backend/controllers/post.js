const postSchema = require("../models/post");
const profileSchema = require("../models/profile");
const userSchema = require("../models/users");

const createPost = async (req, res) => {
  const userId = req.params.id;
  const { jobTitle, company, type, location, description } = req.body;
  try {
    const personal = await profileSchema.findOne({ userId });
    const newPost = new postSchema({
      jobTitle,
      company,
      type,
      location,
      description,
      userId,
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
    const data = await postSchema.find({}).sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, status: "Server Error", message: error.message });
  }
};
const getPostById = async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await postSchema.findById({ _id });
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
  const userId = req.params.id;
  const { title, description } = req.body;
  try {
    const update = await postSchema.findOneAndUpdate(
      { userId },
      { title, description },
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
const getPostByUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const data = await postSchema.find({ userId: userId });
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
const getPostsFilterByType = async (req, res) => {
  const { type } = req.query;
  try {
    const filteredData = await postSchema.find({ type });
    res.status(200).json(filteredData);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error", error: error.message });
  }
};
const sortDate = async (req, res) => {
  const { date } = req.query;

  try {
    const sorted = await postSchema.find({}).sort({ createdAt: date });
    res.status(200).json(sorted);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error", error: error.message });
  }
};
const searchFilter = async (req, res) => {
  const { text } = req.body;

  try {
    const filteredData = await postSchema.find({ $text: { $search: text } });
    if (!filteredData.length) {
      res
        .status(404)
        .json({ message: "Sorry We Couldn't Find What You Looking For" });
    } else {
      res.json(filteredData);
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "server error", error: error.message });
  }
};
module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostByUser,
  getPostsFilterByType,
  sortDate,
  searchFilter,
};
