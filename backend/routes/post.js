const express = require("express");
const postRouter = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/post");

postRouter.post("/:id", createPost);
postRouter.get("/", getPosts);
postRouter.get("/:id", getPostById);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;
