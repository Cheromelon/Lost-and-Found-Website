const express=require('express')
const path=require('path')
const upload = require('../util/cloud_storage')
const item_router=express.Router()
const item=require('../model/items')
const cloudinary=require('cloudinary').v2

function isloggedIN(req,res,next){
    if(!req.session.userID){
        return res.redirect('/auth/login')
    }
    next()
}

item_router.get('/add',isloggedIN,(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","add_items.html"))
})
item_router.post('/add', isloggedIN, (req, res, next) => {

    upload.single('image')(req, res, (err) => {
        if (err) {
            console.error("UPLOAD ERROR:");
            console.error(err);
            return res.send(err.message || "Upload failed");
        }
        next();
    });

}, async (req, res) => {

    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const new_item = new item({
            type: req.body.type,
            location: req.body.location,
            description: req.body.description,
            contact: req.body.contact,
            image: req.file ? {
                url: req.file.path,
                filename: req.file.filename
            } : null,
            userID: req.session.userID
        });

        await new_item.save();

        console.log("item saved successfully");
        return res.redirect('/');

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }

});

item_router.get('/lost',async(req,res)=>{
    const lost_items=await item.find({type:'lost'}).populate('userID','email')
    res.render('home',{items:lost_items,type:'lost'})
})

item_router.get('/found',async(req,res)=>{
    const found_items=await item.find({type:'found'}).populate('userID','email')
    res.render('home',{items:found_items,type:'found'})
})

item_router.get('/my_items',async(req,res)=>{
    const my_items=await item.find({userID:req.session.userID}).populate('userID','email')
    res.render('home',{items:my_items,type:'my'})
})

//deleating my items page
item_router.post('/:id',async(req,res)=>{
    const del_item=await item.findById(req.params.id)
    await item.findByIdAndDelete(req.params.id);
    res.redirect('/items/my_items')
})

module.exports=item_router