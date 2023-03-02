const profileSchema = require("../models/profile");
const createProfile = async (req, res) => {
  const { expertise, interests, userId } = req.body;
   const newProfile = new profileSchema({ expertise, interests, userId })  
try {
    const result = await newProfile.save()
    res.status(200).json({success:true,result:newProfile})
} catch (error) {
   res.status(500).json({success:false,message:error.message}) 
}
};
const updateProfile = async (req, res) => {
  const _id = req.params.id;
  const { expertise, interests, userId } = req.body;
   try {
    const result = await profileSchema.findByIdAndUpdate({_id},{ expertise, interests, userId },{new:true})
    res.status(201).json({success:true,result})
   } catch (error) {
    res.status(500).json({success:false,message:error.message})
   }

};
module.exports = { createProfile, updateProfile };
