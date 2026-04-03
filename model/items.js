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
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    image:{
        url:String,
        filename:String,
    }
})
module.exports=mongoose.model("items",item)