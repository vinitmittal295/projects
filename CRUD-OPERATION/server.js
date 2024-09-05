const express=require("express")
const mongoose=require("mongoose")
const app= express()
const port=3001


app.use(express.json())
app.use(express.urlencoded({extended:true}))



const mongourl="mongodb+srv://vinitmittal295:1234@cluster0.yohx5ud.mongodb.net/crud"
mongoose.connect(mongourl).then(()=>{
    console.log('<<<<<<<connected to mongodb')
})
.catch((err)=>{
    console.log('error connecting to mongodb',err)
})



const userRoutes= require('./routers/user')
app.use('/users',userRoutes)
 
app.listen(port,()=>{
    console.log(`server on running on port ${port}`)
})