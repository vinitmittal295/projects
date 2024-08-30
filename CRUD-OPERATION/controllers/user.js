const User=require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'wedrfuiofdsghjklkjhmnvcxvbnmlkjytertyuiouy'
exports.CreateUser = async(req,res)=>{
    const data=req.body
    const {email}=req.body
    const exsistingUser=await User.findOne({email})
    console.log(`>>>>>>existing user`,exsistingUser)
    if(exsistingUser){
        return res.status(400).json({message:"user alreadyy exist"})
    }
    const user=new User(data)
    await user.save();
    res.status(201).json(user)
}



exports.getAlluser=async(req,res)=>{
    const id=req.params.id
    const user=await User.find();
    res.status(201).json(user)
}



exports.getSingleUser = async(req,res)=>{
    const id = req.params.id
    const user = await User.findById(id);
    if(!(user)){
        return res.status(400).json({message:"user not avaible"})
    }
    res.status(201).json(user)
}



exports.updateUser = async(req,res)=>{
    const id = req.body.id
    const data = req.body
    const user = await User.findByIdAndUpdate(id,data);    
    res.status(201).json(user)
}


exports.deleteRecord = async(req,res)=>{
    const id = req.params.id
    const user = await User.findByIdAndDelete(id);
    res.status(201).json(user)
}

exports.userSignUp = async(req,res)=>{
    const {email, password,name} = req.body
    console.log(req.body)
    return
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);    
    if(!(email && password && name)){
        return res.status(400).json({message:"all Feild are requird"})
    }
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(400).json({message:"User already exists"})
    }
    const data = {email,name,password:hash}
    const user = new User(data)
    await user.save();
    res.status(201).json(user)
}




exports.userLogin = async(req,res)=>{
    const {email, password,name} = req.body  

    if(!(email && password)){
        return res.status(400).json({message:"all Feild are requird"})
    }

    const existingUser = await User.findOne({email})

    if(!(existingUser)){
        return res.status(400).json({message:"User not found"})
    }

    const match = await bcrypt.compare(password, existingUser.password);

    if(!match){
        return res.status(400).json({message:"Invalid password"})
    }
    const token = jwt.sign({id:existingUser._id}, secret
        , { expiresIn: '1h' }
    );
    console.log(`>>>>>>token>>>>>>>>>>>`,token);
    
    res.json({token,existingUser})

}

// exports.generateOtp=async(req,res)=>{
//     const otp=Math.floor((Math.random()*10000))
//     return otp
    
// }

function generateOTP() { 
     return Math.floor((Math.random()*10000))
} 
console.log(generateOTP());

function date(){
    return Date.now(10*(60*1000))

}
console.log(date())



