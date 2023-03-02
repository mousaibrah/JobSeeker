const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String,unique:true, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
});
userSchema.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this);
  });
module.exports = mongoose.model("User", userSchema);
