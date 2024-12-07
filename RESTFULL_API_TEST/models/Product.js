const mongoose=require("mongoose")

const ProductSchema=mongoose.Schema({
    Name:{type:String,required:true},
    Price:{type:String,required:true},
},
{Timestamps:true}
)
module.exports=mongoose.model("Product",ProductSchema)