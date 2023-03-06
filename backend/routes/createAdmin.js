const express = require("express");
const Admin = express.Router();
const {
  createAdmin,
  createAdminRole,
  createRoles,
} = require("../controllers/createAdmin");

Admin.get("/", createAdminRole, createRoles, createAdmin);

module.exports = Admin;
