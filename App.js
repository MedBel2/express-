const express =require("express")
const daterequire = require('./Views/Middleware/Date.js');

//express
const app = express()
 

//middle ware 
app.get("/",daterequire,(req,res)=>{

    res.send("<h2>Hello world</h2> <a href='home'> click here to start you're app </a>")
}

);
app.get("/home",daterequire,(req,res )=>{
res.sendfile(__dirname+"/Views/home.html");

})

//port 
app.listen(5001,err=> {
    if(err) {console.log(err)}
    else console.log("serveer is running on http:/localhost:5001")


})