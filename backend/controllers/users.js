const userSchema = require("../models/users");
const roleSchema = require("../models/role");
const adminSchema = require("../models/adminController");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    dateOfBirth,
    role,
    location,
    img,
  } = req.body;

  try {
    const findRole = await roleSchema.findOne({ role });
    const newUser = new userSchema({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      dateOfBirth,
      location,
      img,
      role: findRole._id,
    });
    const result = await newUser.save();

    const createUser = new adminSchema({
      clientId: result._id,
      clientRole: role,
      clientName: `${firstName} ${lastName}`,
    });
    const data = await createUser.save();
    res.status(201).json({
      success: true,
      message: `Account Created Successfully`,
      result: newUser,
    });
  } catch (error) {
    if (error.keyPattern) {
      return res.status(409).json({
        success: false,
        message: `The email already exists`,
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};
const login = async (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  try {
    const result = await userSchema
      .findOne({ email })
      .populate("role", "-_id -__v");
    if (!result) {
      return res.status(403).json({
        success: false,
        message: `The email doesn't exist or The password you’ve entered is incorrect`,
      });
    } else {
      const valid = await bcrypt.compare(password, result.password);
      if (!valid) {
        return res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      }
    }
    const payload = {
      userId: result._id,
      username: `${result.firstName} ${result.lastName}`,
      role: result.role,
    };

    const options = {
      expiresIn: "600m",
    };
    const token = jwt.sign(payload, process.env.SECRET, options);
    res.status(200).json({
      success: true,
      message: `Valid login credentials`,
      token: token,
      userId: result._id,
      role: result?.role?.role,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: error.message,
    });
  }
};
const getUsers = async (req, res) => {
  try {
    const data = await adminSchema.find({});
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", err: error.message });
  }
};
const deleteUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const deleteUser = await adminSchema.findByIdAndDelete({ _id });
    res
      .status(200)
      .json({ success: true, message: "The User Has Been Deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", err: error.message });
  }
};
const updateRole = async (req, res) => {
  const _id = req.params.id;
  try {
    const findRole = await roleSchema.findOne({ role: "COMPANY" });
    const userData = await userSchema.findByIdAndUpdate(
      { _id },
      { role: findRole._id },
      { new: true }
    );
    const updateAdminDashBoard = await adminSchema.findOneAndUpdate({clientId:_id},{clientRole:'COMPANY'})
    res.status(200).json(true);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = { register, login, getUsers, deleteUser, updateRole };
