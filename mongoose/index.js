const express=require('express');
require('./config');
const app=express();
const product=require("./product");

app.use(express.json());                     //converting string type input to json

// data insert to the database via node

app.post("/create",async (req,resp)=>{

    const data =new product(req.body);
    const result= await data.save();
    console.log(result);
    resp.send(result);
    resp.end();
});

//read data frm data base

app.get("/list",async (req,resp)=>{
    console.log(req.body);
    const result=await product.findOne(req.body);
    resp.send(result);
    console.log(result);
    resp.end();
})

//read data frm data base

app.delete("/del",async (req,resp)=>{
    console.log(req.body);

    const result=await product.deleteOne(req.body);
   
    console.log(result);
    if(result.deletedCount){
        resp.send("data deleted succesfully");
    }
    else{
        resp.send("data is not deleted");
    }

   
    resp.end();
});

// update data in database

app.put("/updt/:name",async (req,resp)=>{
    const result=await product.updateOne(req.params,{$set:req.body});
    console.log("updated successfully");
    if(result.modifiedCount){
        resp.send("updated successfully");
    }
    else{
        resp.send("not updated");
    }

})




app.listen(5000);









//----------------------------------------------------------------------------------------------------------------------------------
//Normal crud operation with mongoose

// const insertDb=async ()=>{
  

//     const product= mongoose.model('products',ProductSchema);
//     let data=await product.insertMany({name:"reno 3"})
//    console.log(data);

// }

// // insertDb();

// const updateDb=async ()=>{
  

//     const product= mongoose.model('products',ProductSchema);
//     let data=await product.updateOne({name:"reno 3"},{$set:{brand:"oppo",price:"180"}});
//    if(data.modifiedCount){
//     console.log("data updated successfully");
//    }
//    else{
//     console.log("error");
//    }

// }
// // updateDb();

// const readDb=async ()=>{
  

//     const product= mongoose.model('products',ProductSchema);
//     let data=await product.find({});
//     console.log(data);

// }
// // readDb();


// const deleteDb=async ()=>{
  

//     const product= mongoose.model('products',ProductSchema);
//     let data=await product.deleteOne({name:"reno 3",brand:"oppo",price:"180"});
//     if(data.deletedCount){
//         console.log("data deleted")
//     }
//     else{
//         console.error("error")
//     }
// }
// // deleteDb();