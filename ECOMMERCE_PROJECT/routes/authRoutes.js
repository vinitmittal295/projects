import express from "express"
import {registerController,loginController} from "../controllers/authController.js"

// router object
const router=express.Router()
router.post('/register',registerController)

// LOGIN
router.post('/login',loginController)
export default router