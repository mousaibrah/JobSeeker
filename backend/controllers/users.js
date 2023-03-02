const userSchema = require('../models/users')

const register = async(req,res)=>{
    const {firstName,lastName,phoneNumber, email,password,dateOfBirth,role,} = req.body
    const newUser = new userSchema({firstName,lastName,phoneNumber, email,password,dateOfBirth,role,})
    try {
        const result = await newUser.save()
        res.status(201).json({success:true,result:newUser})
    } catch (error) {
        res.json(error.message)
    }
} 
const login = async (req,res)=>{

}
module.exports ={register,login}