const express = require('express');
const {adminauth,userauth}= require('./middleware/auth.js');
const app = express();  // create an express app


//  /use?r is basically user and usr
//  /use+r is user and useeeeer
// /use*r is user and usetrgythyhyr

app.use('/admin',adminauth);

app.use('/user',userauth);
app.get('/admin/getinfo',(req,res)=>{
    res.send("Admin info");
})

app.get('/admin/deleteuser',(req,res)=>{
    res.send("user deleted");
})

app.get('/user/getinfo',(req,res)=>{
    res.send("User info");
})

app.get('/user/deleteuser',(req,res)=>{
    res.send("user deleted");
})
app.get('/user/:userid/:age',(req,res)=>{
    console.log(req.params);
    res.send({"name":"Pranshul","age":"21"});
});

// 


app.post('/user',(req,res)=>{
    console.log("Data saved successfully");
    res.send("Data saved successfully");
})

// app.use("/test",(req,res)=>{
//     res.send('namaste');
// })
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});

