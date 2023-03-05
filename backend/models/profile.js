const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userImg: { type: String },
  UserName: { type: String },
  about: { type: String },
  expertise: { type: String },
  skills: [{ type: String }],
  education: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
module.exports = mongoose.model("Profile", profileSchema);
