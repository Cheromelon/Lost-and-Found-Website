const path=require('path') //core module
const express=require('express') //external module
const user_router=require('./routes/user_router')

const app=express()
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public"))); //to access public folder


app.use('/',user_router)

const PORT=4000
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})