const express=require("express")
const router=express.Router()
const productcontroller=require("../controllers/Product")


router.post("/newproduct",productcontroller.CreateProduct)
router.get("/allproduct",productcontroller.Getproduct)
router.get("/singleproduct/:id",productcontroller.Getoneproduct)
router.put("/upateproduct/:id",productcontroller.Updateproduct)
router.delete("/deleteprodcut/:id",productcontroller.Deleteprpoduct)

module.exports=router