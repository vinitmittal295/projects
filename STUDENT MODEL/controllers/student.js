const Studentdata=require("../models/student")

exports.CreateStudent=async(req,res)=>{
    const data=req.body
    // const id=req.body.id
    const {email}=req.body
    const existinstudent=await Studentdata.findOne({email})
    const student=new Studentdata(data)
    student.save()
    res.status(200).json(student)

}