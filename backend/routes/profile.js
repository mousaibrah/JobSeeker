const express = require("express");
const profileRouter = express.Router();
const {
  createProfile,
  updateProfile,
  getProfileByUserId,
} = require("../controllers/profile");
profileRouter.post("/:id", createProfile);
profileRouter.get("/:id", getProfileByUserId);
profileRouter.put("/:id", updateProfile);
profileRouter.put("/:id/skills", updateProfile);

module.exports = profileRouter;
