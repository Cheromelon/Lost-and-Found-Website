const path=require('path') //core module
const express=require('express') //external module
const user_router=require('./routes/user_router')
const auth_router=require('./routes/auth_router')
const mongoose=require('mongoose')
const mongo_connect=require('./util/database')
const session=require('express-session') //external module for session
const MongoStore=require('connect-mongo').default
const item_router=require('./routes/item_router')
const upload = require("./util/cloud_storage");

const app=express()
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
const store=MongoStore.create({
    mongoUrl:mongo_connect,
    collectionName:'sessions'
})
app.use(session({
    secret:"lost and found",
    resave:false,
    saveUninitialized:false,
    store:store
}))
app.use((req,res,next)=>{
    res.locals.isLoggedIn=req.session.userID?true:false,
    next();
})
app.use(express.static(path.join(__dirname, "public"))); //to access public folder


app.use('/',user_router)
app.use('/auth',auth_router)
app.use('/items',item_router)

const PORT=4000
mongoose.connect(mongo_connect).then(() => {
    console.log("connected to mongo_db");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  }).catch(err => {
    console.log("error while connecting to mongo", err);
  })
