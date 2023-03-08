const userSchema = require("../models/users");
const roleSchema = require("../models/role");
const axios = require("axios");

const createAdminRole = async (req, res, next) => {
  const newRole = new roleSchema({
    role: "ADMIN",
    permissions: [
      "CREATE_ROLES",
      "CRUD_POSTS",
      "CREATE_UPDATE_PROFILE",
      "VIEW_POSTS",
    ],
  });
  try {
    const roleData = await newRole.save();
    next();
  } catch (error) {
    res.json(error);
  }
};
const createRoles = async (req, res, next) => {
  const companyRole = new roleSchema({
    role: "COMPANY",
    permissions: ["CRUD_POSTS", "CREATE_UPDATE_PROFILE", "VIEW_POSTS"],
  });
  const userRole = new roleSchema({
    role: "USER",
    permissions: ["CREATE_UPDATE_PROFILE", "VIEW_POSTS"],
  });
  try {
    const companySave = await companyRole.save();
    const userSave = await userRole.save();
    next();
  } catch (error) {
    res.json(error);
  }
};

const createAdmin = async (req, res) => {
  try {
    const roleId = await roleSchema.findOne({ role: "ADMIN" });
    const Roles = await roleSchema.find({});
    const admin = new userSchema({
      firstName: "Admin",
      lastName: "Admin",
      phoneNumber: "00962786037753",
      email: "Admin@Admin.job",
      password: "Admin99",
      dateOfBirth: "5-11-1999",
      role: roleId._id,
    });
    const userData = await admin.save();
    const createProfile = await axios.post(
      `http://localhost:5000/profile/${admin._id}`,
      admin
    );
    res.status(200).json({ Roles, Admin: admin });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { createAdmin, createAdminRole, createRoles };
