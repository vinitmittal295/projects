
const User = require ("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const secret="VINIT"

exports.CreateUser=async(req,res)=>{
    const data=req.body
    // const{email}=req.body
    const{email}=data
    // isko ese bhi use kr skte h
    
    const existingUser=await User.findOne({email})
    if(existingUser){
        return res.status(400).json({msg:"user already exist"})
    }
    
    const user=new User(data)
    user.save()
    res.status(201).json(user)
}

exports.getAll=async(req,res)=>{
    // const id=req.params.id 
    const user= await User.find();
    res.status(201).json(user)

}

exports.getSingleUser=async(req,res)=>{
    const id=req.params.id
    console.log(">>>params>",req.params)
    console.log(">>>id>",id)
    
    const user=await User.findById(id);
    if(!(user)){
        return res.status(400).json({message:"usre already exist"})
    }
    res.status(201).json(user)
}

// exports.updateUser=async(req,res)=>{
//     const data=req.body
//     const id=req.body.id
//     const user=await User.findByIdAndUpdate(id,data)
//     res.status(201).json(user)
// }
exports.userSignup=async(req,res)=>{
    const {email,password,name}=req.body

    const salt=bcrypt.genSaltSync(10);
    const hash=bcrypt.hashSync(password,salt)
    console.log(hash)

    const existingUser=await User.findOne({email})
    const data={email,name,password:hash}
    const user= new User(data)
    await user.save()
    res.status(201).send(user)

}

exports.CreateLogin=async(req,res)=>{
    const{email,password}=req.body
    if(!(email && password)){
        return res.status(400).json({message:"all field are required"})
    }
    const existingUser=await User.findOne({email})
    if(!(existingUser)){
        return res.status(400).json({message:"email is not found"})
    }
    const match = await bcrypt.compare(password, existingUser.password);

    if(!match){
        return res.status(400).json({message:"Invalid password"})
    }
    const token = await jwt.sign({id:existingUser._id},secret,{expiresIn:"1h"})
    console.log(">>>token>>",token)
    console.log(">>existingUser>>>",existingUser)

    res.json({token,existingUser})
}

