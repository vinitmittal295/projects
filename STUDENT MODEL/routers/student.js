const express=require("express")
const router=express.Router()
const studentcontrollers=require("../controllers/student")


router.post("/post",studentcontrollers.CreateStudent)

module.exports=router