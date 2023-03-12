const express = require("express");
const roleRouter = express.Router();
const { createRole } = require("../controllers/role");
const { test } = require("../controllers/email");

roleRouter.post("/", createRole);

module.exports = roleRouter;
