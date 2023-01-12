const express= require ('express');
const { diskStorage } = require('multer');
const app=express();
const multer=require ('multer');

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"new_file");
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg");
        }
    })
}).single("userfile");

app.post("/upload",upload,(req,resp)=>{

    resp.send("file uploaded");
});

app.listen(8000);