const userSchema = require("../models/users");
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
  } = req.body;
  const newUser = new userSchema({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    dateOfBirth,
    role,
  });
  try {
    const result = await newUser.save();
    console.log(result);
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
        message: `Server Error`,
        error: error.message,
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
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: error.message,
    });
  }
};

module.exports = { register, login };
