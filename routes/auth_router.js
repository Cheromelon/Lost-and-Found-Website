const path=require('path')
const express=require('express')
const auth_router=express.Router()

auth_router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","login.html"))
})

module.exports=auth_router
