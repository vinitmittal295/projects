const express=require("express")
const mongoose=require("mongoose")

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))



const mongourl="mongodb+srv://vinitmittal295:1234@cluster0.yohx5ud.mongodb.net/crud1"
mongoose.connect(mongourl).then(()=>{
    console.log(">>>database connected")
})
.catch((error)=>{
    console.log("error connecting to mongodb",error)
})
const userRoutes=require("./routers/user")
app.use("/users",userRoutes)

const port=3002
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})