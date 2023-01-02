
const dbConnect=require("./mongodb")

         //read data from database through node js

const getData=async()=>{
let connect=await dbConnect()

let data=await connect.find({"name":"oneplus 8T"}).toArray()

console.log(data)
}

getData()
