const Data=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const secret="mksnfjknfksfvdkmnfmfnmfn"

exports.CreateUSer=async(req,res)=>{
    const {email}=req.body
    const FindingUser=await Data.findOne({email})
    const userdata=req.body
    const newuserdata=new Data(userdata)
    await newuserdata.save()
    res.status(201).json(newuserdata)
}

exports.GetUser=async(req,res)=>{
    const id=req.params.id
    const allgetuser=await Data.find()
    res.status(200).json(allgetuser)

}

exports.FindOneUSer=async(req,res)=>{
    const id=req.params.id
    const getoneUSer=await Data.findOne({_id:id})
    res.status(200).json(getoneUSer)
}

exports.UpdateUSer=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    const updateuser=await Data.findByIdAndUpdate(id,data)
    res.status(200).json(updateuser)
}

exports.DeleteUSer=async(req,res)=>{
    const id=req.params.id
    const deleteuser=await Data.findByIdAndDelete(id)
    res.status(200).json(deleteuser)
}

exports.userSignup=async(req,res)=>{
    const {Email,Password}=req.body
    // const userdata=req.body
    // const FindingUser=await Data.findOne({email})
    const salt= await  bcrypt.genSalt(10)
    console.log(`>>>>>salt`,salt);
    const hash=await bcrypt.hashSync(Password,salt)
    console.log(`>>>>>hash`,hash);
    const updateddata={Email,Password:hash}
    console.log(`>>>>>updateddata`,updateddata);
    
    const newdata = new Data(updateddata)
    newdata.save()
    res.status(200).json(newdata)
}


exports.userLogin=async(req,res)=>{
    const {Email,Password}=req.body
    const FindingUser=await Data.findOne({Email})
    const comparepassword=await bcrypt.compare(Password,FindingUser.Password)
    const token=jwt.sign({id:FindingUser._id},secret,{expiresIn:"1h"})
    res.status(200).json({token,FindingUser})
    
}