const User=require('../models/user')
const jwt = require('jsonwebtoken');
const secret = 'wedrfuiofdsghjklkjhmnvcxvbnmlkjytertyuiouy'
module.exports=async(req,res,next)=>{
    // console.log(req)
    const header=req.headers.authorization
    // console.log(header)
    if(!(header)){
        return res.status(400).json({message:"jj"})
    }

    const token=header.split(" ")[1]
    // console.log(token)

    if(!(token)){
        return res.status(400).json({message:"jj"})
    }
    const decode=jwt.verify(token,secret)
    // console.log(decode)

    if(!(decode)){
        return res.status(400).json({message:"jj"})
    }
    const{id}=decode
    const user=await User.findOne({_id:id})
    console.log(user)
    next()

}

