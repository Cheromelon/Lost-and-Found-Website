const path=require('path')
const express=require('express')
const auth_router=express.Router()
const user=require('../model/user')
const bcrypt=require('bcrypt')

auth_router.get('/login',(req,res)=>{
    res.render('login',{message:null})
})

auth_router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const existing_user=await user.findOne({email})
    if (existing_user){
        const isMatch=await bcrypt.compare(password,existing_user.password)
        if(!isMatch){
            return res.render('login',{message:"Wrong password"})
        }
        req.session.userID=existing_user._id
        return res.redirect('/')
    }
    //the above is to check if the existing user  entered right password
    //now we need to create new user if he dosent exist
    const hashpassword=await bcrypt.hash(password,10)
    const new_user=user({
        email,
        password:hashpassword,
    })
    await new_user.save() //successfully saved user to the database
    req.session.userID=new_user._id
    return res.redirect('/')
})

auth_router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("error while destroying session",err)
            return res.redirect('/')
        }
        return res.redirect('/')
    })
})

module.exports=auth_router
