const express = require("express");
const profileRouter = express.Router();
const {
  createProfile,
  updateProfile,
  getProfileByUserId,
  addSkillToProfile,
} = require("../controllers/profile");
profileRouter.post("/:id", createProfile);
profileRouter.get("/:id", getProfileByUserId);
profileRouter.put("/:id", updateProfile);
profileRouter.put("/:id/skills", addSkillToProfile);

module.exports = profileRouter;
