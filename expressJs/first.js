


// normal page rendering

const express = require('express');
const app= express();

app.get("",(req,resp)=>{
    console.log("the request web browser send--->",req.query.name)
resp.send(`welcome ${req.query.name}, Its Homepage`);

});

app.get("/aboutus",(req,resp)=>{
    resp.send(` ${req.query.name} Its About us page`);
 
 });
    
 app.get("/contactus",(req,resp)=>{
    resp.send("Its Contact us page");
    
 });

 app.listen(5000);