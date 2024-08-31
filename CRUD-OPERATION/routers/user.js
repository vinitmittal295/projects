const express=require("express")
const router=express.Router()
const userController=require('../controllers/user')
const verifyAuth=require('../middleware/verifyAuth')



router.post('/',verifyAuth,userController.CreateUser)
router.get('/',verifyAuth,userController.getAlluser)
router.get('/:id', userController.getSingleUser)
router.patch('/asd', userController.updateUser)
router.delete('/:id', userController.deleteRecord)
router.post('/signup',userController.userSignUp)
router.post('/login', userController.userLogin)
// router.get('/otp',userController.generateOtp)

module.exports=router;