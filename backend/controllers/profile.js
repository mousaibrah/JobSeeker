const profileSchema = require("../models/profile");
const userSchema = require("../models/users");

const getProfileByUserId = async (req, res) => {
  const userId = req.params.id;
  try {
    const data = await profileSchema.findOne({ userId });

    res.json({ data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const createProfile = async (req, res) => {
  const userId = req.params.id;
  const { userImg, about, expertise, skills, education } = req.body;

  try {
    const data = await userSchema.findById({ _id: userId });
    const newProfile = new profileSchema({
      userImg,
      UserName: `${data.firstName} ${data.lastName}`,
      about,
      email: `${data.email}`,
      expertise,
      mobile: `${data.phoneNumber}`,
      skills,
      education,
      userId,
    });
    const result = await newProfile.save();
    res.status(200).json({ success: true, result: newProfile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const updateProfile = async (req, res) => {
  const userId = req.params.id;
  const { userImg, UserName, about, expertise, education } = req.body;
  try {
    const result = await profileSchema.findOneAndUpdate(
      { userId },
      { userImg, UserName, about, expertise, education, userId },
      { new: true }
    );
    res.status(201).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const addSkillToProfile = async(req,res)=>{
const userId = req.params.id
const {skill} = req.body
try {
  const addSkills = await profileSchema.findOneAndUpdate({userId},{$push:{skills:{$each:skill}}},{new:true})
res.json(addSkills)
} catch (error) {
  res.json(error)
}
}
module.exports = { createProfile, updateProfile, getProfileByUserId,addSkillToProfile };
