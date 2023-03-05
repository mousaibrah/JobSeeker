const express = require("express");
const profileRouter = express.Router();
const {
  createProfile,
  updateProfile,
  getProfileByUserId,
} = require("../controllers/profile");
profileRouter.post("/", createProfile);
profileRouter.get("/:id", getProfileByUserId);
profileRouter.put("/:id", updateProfile);

module.exports = profileRouter;
