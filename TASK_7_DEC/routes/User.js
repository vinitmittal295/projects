const express=require("express")
const router=express.Router()
const userController=require("../controllers/User")

router.post("/create",userController.creteUser)
router.post("/login",userController.login)
module.exports=router