const path=require('path')
const express=require('express')
const user_router=express.Router()
const item=require('../model/items')

user_router.get('/',async(req,res)=>{
    const items=await item.find()
    res.render('home',{items:null,type:null})
})

module.exports=user_router