const User=require("../models/user")
const jwt=require("jsonwebtoken")
const secret="VINIT"
module.exports=async(req,res,next)=>{
    const header=req.headers.authorization
    console.log(">>>header>>>",header)
    const token=header.split(" ")[1]
    console.log(">>>tokenr>>>",token)
    const decode=jwt.verify(token,secret)
    console.log(">>>decode>>>",decode)
    const{id}=decode
    const user=await User.findOne({_id:id})
    console.log(user)
    next()  

}