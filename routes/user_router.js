const path=require('path')
const express=require('express')
const user_router=express.Router()

user_router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","home.html"))
})


module.exports=user_router