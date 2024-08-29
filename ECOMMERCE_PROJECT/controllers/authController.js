import {comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from"jsonwebtoken"
export const  registerController =async(req,res)=>{ 

    try{
        const {name,email,password,phone,address}=req.body
        // validaiton
        if(!name){
            return res.send({error:"name is required"})
        }
        if(!email){
            return res.send({error:"email is required"})
        }
        if(!password){
            return res.send({error:"password is required"})
        }
        if(!phone){
            return res.send({error:"phone is required"})
        }
        if(!address){
            return res.send({error:"address is required"})
        }
        // check user
        const existingUser= await userModel.findOne({email})  
        // existing user
        if(existingUser ){
            return res.status(200).send({
                succes:true,
                message:"already register please login"
            })
        }
        const hashedPassword= await hashPassword(password)
        // save

        const user= await new userModel({name,email,phone,address,password:hashedPassword, }).save();
        res.status(201).send({
            succes:true,
            message:"user register successfully",
            user
        })



    }
    catch(error){
        console.log(error)
        res.status(500).send({
            succes:false,
            message:'error in registration',
            error
        })
    }
}

// for login
export const loginController=async(req,res)=>{
    try{
        const{email,password}=req.body
        if(!email || !password){
            return res.status(400).send({
                success:"false",
                message:"invalid email or username"
            })
        }
        const user=await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:"false",
                message:"email is not registred"
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:"false",
                message:"invalid password"
            })
        }

        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET, {expiresIn:"7d"})
        res.status(200).send({
            success:"true",
            message:"login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token,
        })


    }
    catch(error){
        console.log(error)
        res.status(500).send({
            succes:"false",
            message:"error in login",
            error
        })
    }
}

// test controller

export const testController=async(req,res)=>{
    res.send("protected route");
}