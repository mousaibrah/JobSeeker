const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    responsibility: [
      {
        type: String,
        required: true,
      },
    ],
    location: { type: String },
    picturePath: { type: String },
    userPicturePath: { type: String },
    applied: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
