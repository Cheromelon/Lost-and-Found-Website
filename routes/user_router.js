const path=require('path')
const express=require('express')
const user_router=express.Router()

user_router.get('/',(req,res)=>{
    res.render('home')
})


module.exports=user_router