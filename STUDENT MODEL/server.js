const express =require("express")
const mongoose=require("mongoose")

const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongo_url="mongodb+srv://vinitmittal295:1234@cluster0.yohx5ud.mongodb.net/student"
mongoose.connect(mongo_url).then(()=>{
    console.log("databse connected")
})
.catch((error)=>{
    console.log(error)
})
const studentRoutes=require("./routers/student")
app.use("/students",studentRoutes)
const port =3005
app.listen(port,()=>{
    console.log(`server on ${port}`)
})