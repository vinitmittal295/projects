const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true},
        phone:{type:String,require:true},
        role:{type:String,require:true},
        address: {
            street: { type: String },
            city: { type: String },
            state: { type: String },
            zip: { type: String }
        },


    },
    {timestamps:true, versionKey:false}
)
module.exports=mongoose.model("student",studentSchema)