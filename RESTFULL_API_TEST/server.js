const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
const port=3002
const mongurl="mongodb+srv://vinitmittal295:1234@cluster0.yohx5ud.mongodb.net/restfull_api"
mongoose.connect(mongurl).then(()=>{
    console.log("Database is connected")
})
const userRoutes=require("./routes/user")
app.use("/users",userRoutes)
const productRoutes=require("./routes/Product")
app.use("/products",productRoutes)
app.listen(port,()=>{
    console.log("Server is running on port 3000")
})