const express=require("express")
const router=express.Router()
const userControllers=require("../controllers/user")
const verifyAuth=require("../middlewware/verifyAuth")

router.post("/post",userControllers.CreateUser)
router.get("/getall",verifyAuth,userControllers.getAll)
router.get("/:id",userControllers.getSingleUser)
// router.patch("/vinit",userControllers.updateUser)
router.post('/signup',userControllers.userSignup)
router.post("/login",userControllers.CreateLogin)



module.exports=router;