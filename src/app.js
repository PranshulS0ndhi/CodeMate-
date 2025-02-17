const express = require('express');

const app = express();  // create an express app

app.use("/test",(req,res)=>{
    res.send('namaste');
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});

