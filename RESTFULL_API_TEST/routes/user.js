const express=require("express")
const router=express.Router()
const usercontroller=require("../controllers/User")


router.post("/newUser",usercontroller.CreateUSer)
router.get("/alluser",usercontroller.GetUser)
router.get("/singleuser/:id",usercontroller.FindOneUSer)
router.put("/updateuser/:id",usercontroller.UpdateUSer)
router.delete("/deleteuser/:id",usercontroller.DeleteUSer)
router.post("/signup",usercontroller.userSignup)
router.post("/login",usercontroller.userLogin)

module.exports=router