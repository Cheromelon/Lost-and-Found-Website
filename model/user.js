const mongoose=require('mongoose')

const user_schema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})

module.exports=mongoose.model("credentials",user_schema)