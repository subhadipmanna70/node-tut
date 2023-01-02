const express = require("express");
const dbConnect = require("../mongodb/mongodb.js");
const app = express();

app.use(express.json());

// read data from mongodb

app.get("/", async (req, resp) => {
  const db = await dbConnect();
  let data = await db.find().toArray();
  resp.send(data); //passing the data from database to browser via api
  resp.end();
});

//insert new data in mongodb

app.post("/", async (req, resp) => {
  const db = await dbConnect();
  const result = await db.insertOne(req.body);
  if (result.acknowledged) {
    console.log("data inserted successfully");
  }

  resp.end();
});

// update any value in mongodb through node

app.put("/:name", async (req, resp) => {
  const db = await dbConnect();
  const result = await db.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );

  resp.send(result);
  if (result.modifiedCount) {
    console.warn("successfully updated");
  }
  resp.end();
});

// delete data in mongodb with node api

app.delete("/",async(req,resp)=>{

  const db=await dbConnect();
  const result=await db.deleteOne(req.body);
  if(result.deletedCount){
    console.warn("successfully deleted");
  }

resp.end();
});







app.listen(7000);
