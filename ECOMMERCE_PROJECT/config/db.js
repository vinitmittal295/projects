import mongoose, { connect } from "mongoose";
import colors from "colors"
const connectDB= async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`CONNECTED TO MONGODB SERVER ${conn.connection.host}`.bgMagenta.white)
    }
    catch (error){
        console.log(`error in mongodb ${error}`.bgRed.white)
    }
}
export default connectDB;

