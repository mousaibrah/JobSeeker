const roleSchema = require("../models/role");

const createRole = async (req, res) => {
  const { role, permissions } = req.body;
  const newRole = new roleSchema({ role, permissions });
  try {
    const result = newRole.save();
    res.status(201).json({
      success: true,
      message: "The Role Has Been Created Successfully",
      result: newRole,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, status: "Server Error", message: error.message });
  }
};

module.exports = { createRole };
