const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  expertise: [{ type: String, required: true }],
  interests: [{ type: String, required: true }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
module.exports = mongoose.model("Profile", profileSchema);
