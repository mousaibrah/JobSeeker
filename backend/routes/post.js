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
  searchFilter,
} = require("../controllers/post");

postRouter.post("/search", searchFilter);
postRouter.get("/filter", getPostsFilterByType);
postRouter.get("/sort", sortDate);
postRouter.get("/page/:num", getPosts);
postRouter.post("/:id", createPost);
postRouter.get("/:id", getPostById);
postRouter.get("/author/:id", getPostByUser);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;
