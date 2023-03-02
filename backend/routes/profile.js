const express = require("express");
const profileRouter = express.Router();
const { createProfile, updateProfile } = require("../controllers/profile");
profileRouter.post("/", createProfile);
profileRouter.put("/:id", updateProfile);

module.exports = profileRouter;
