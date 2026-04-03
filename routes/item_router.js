const express=require('express')
const upload = require('../util/cloud_storage')
const item_router=express.Router()


item_router.get('/add',(req,res)=>{
    res.render('add_items',{message:null})
})
item_router.post('/add',upload.single('image'),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    res.redirect('/')
})

module.exports=item_router