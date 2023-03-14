const express = require("express");
const postRouter = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostByUser,
  getPostsFilterByType,
  sortDate,
} = require("../controllers/post");

postRouter.post("/:id", createPost);
postRouter.get("/", getPosts);
postRouter.get("/filter", getPostsFilterByType);
postRouter.get("/sort", sortDate);
postRouter.get("/:id", getPostById);
postRouter.get("/author/:id", getPostByUser);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;
