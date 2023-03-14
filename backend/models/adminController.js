const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    clientId: { type: String, required: true },
    clientRole: { type: String },
    clientName: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("dashboard", adminSchema);
