const dbConnect=require("./mongodb")

   // delete record from database

const del=async ()=>{
const db=await dbConnect()
const result=await db.deleteOne({"name":"Nord"})

if(result.acknowledged){
console.warn("record deleted successfully")
}
}
del()