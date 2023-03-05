const profileSchema = require("../models/profile");
const createProfile = async (req, res) => {
  const { userImg, UserName, about, expertise, skills, education, userId } =
    req.body;
  const newProfile = new profileSchema({
    userImg,
    UserName,
    about,
    expertise,
    skills,
    education,
    userId,
  });
  try {
    const result = await newProfile.save();
    res.status(200).json({ success: true, result: newProfile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const updateProfile = async (req, res) => {
  const _id = req.params.id;
  const { userImg, UserName, about, expertise, skills, education, userId } =
    req.body;
  try {
    const result = await profileSchema.findByIdAndUpdate(
      { _id },
      { userImg, UserName, about, expertise, skills, education, userId },
      { new: true }
    );
    res.status(201).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = { createProfile, updateProfile };
