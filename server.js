const express=require('express');
const app=express();
const path=require('path');


app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,"./public/index.html"));
})

app.get('/home',function(req,resp){
    resp.sendFile(path.join(__dirname,"./public/index2.html"));
})
app.listen(3690);
console.log("Server is running on port 3690");
