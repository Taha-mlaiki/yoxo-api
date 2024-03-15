const asyncHandler = require("express-async-handler")
const {User,userValidation} = require("../../models/user.model")
const bcrypt = require("bcryptjs")

const signupRoute = asyncHandler(async(req,res)=>{
    const {username,email,phone} = req.body
    const {error} = userValidation.validate({username,email,phone})
    if(error){
        return res.status(400).json({error:error.details[0].message})
    }
    const findUser = await User.findOne({$or:[{phone},{email}]})
    if(findUser){
        return res.status(409).json({error:"Phone Number or email Already Used, try somthing else"})
    }
    try {
        await User.create({username,email,phone});
        res.status(201).json({success:"Reservation successfull Thank you!"})
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
   
})

module.exports = signupRoute