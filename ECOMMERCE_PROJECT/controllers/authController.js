import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
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
        const hashedPassword= await hashPassword()
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