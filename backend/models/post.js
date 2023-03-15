const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const postSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    type: { type: String },
    location: { type: String },
    description: {
      type: String,
      required: true,
    },
    userPicturePath: { type: String },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
postSchema.index({ jobTitle: "text" });
const PostSchema = mongoose.model("Post", postSchema);
PostSchema.createIndexes();
module.exports = PostSchema;
