const profileSchema = require("../models/profile");
const userSchema = require('../models/users')
const getProfileByUserId = async(req,res)=>{
  const userId = req.params.id
  try {
    const data = await profileSchema.findOne({userId})
    const userData = await userSchema.findById({_id:userId})
    if (!data) {
      res.json({userData})
    } else {
      res.json({data,userData})
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    
  }
}
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
    const data = await userSchema.findById({_id:userId})
    console.log('data :>> ', data);
    const result = await newProfile.save();
    res.status(200).json({ success: true, result: newProfile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const updateProfile = async (req, res) => {
  const userId = req.params.id;
  const { userImg, UserName, about, expertise, skills, education } =
    req.body;
  try {
    const result = await profileSchema.findOneAndUpdate(
      { userId },
      { userImg, UserName, about, expertise, skills, education, userId },
      { new: true }
    );
    res.status(201).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = { createProfile, updateProfile,getProfileByUserId };
