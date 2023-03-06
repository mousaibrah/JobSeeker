const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  expertise: { type: String },
  education: { type: String },
  skills: [{ type: String }],
  userImg: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
  },
  UserName: { type: String },
  email: { type: String },
  mobile: { type: String },
  about: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
module.exports = mongoose.model("Profile", profileSchema);
