const express = require("express");
const userRouter = express.Router();
const { register, login, updateRole } = require("../controllers/users");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/role/:id", updateRole);
module.exports = userRouter;
