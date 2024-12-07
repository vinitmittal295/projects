const Data=require("../models/Product")

exports.CreateProduct=async(req,res)=>{
    const userdata=req.body
    const newuserdata=new Data(userdata)
    await newuserdata.save()
    res.status(201).json(newuserdata)
}

exports.Getproduct=async(req,res)=>{
    const id=req.params.id
    const allgetuser=await Data.find()
    res.status(200).json(allgetuser)

}

exports.Getoneproduct=async(req,res)=>{
    const id=req.params.id
    const getoneUSer=await Data.findOne({_id:id})
    res.status(200).json(getoneUSer)
}

exports.Updateproduct=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    const updateuser=await Data.findByIdAndUpdate(id,data)
    res.status(200).json(updateuser)
}

exports.Deleteprpoduct=async(req,res)=>{
    const id=req.params.id
    const deleteuser=await Data.findByIdAndDelete(id)
    res.status(200).json(deleteuser)
}