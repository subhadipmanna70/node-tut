const {MongoClient}=require('mongodb')
const url="mongodb://0.0.0.0:27017"       //instead of localhost you have to right 0.0.0.0
const database="e-comm"
const client=new MongoClient(url)


           // create connection with mongodb

async function dbConnect(){
let result=await client.connect()
let db=result.db(database)
return db.collection("products")               //taking the collection which we wan to use

}

module.exports= dbConnect

