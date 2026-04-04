const mongoose=require('mongoose')

const item=mongoose.Schema({
    type:{
        type:String,
        enum:['lost','found'],
        required:true,
    },
    location:String,
    description:String,
    contact:String,
    image:{
        url:String,
        filename:String,
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"credentials",
    }
},{timestamps:true})
module.exports=mongoose.model("items",item)