const dbConnect=require("./mongodb")


           // update data of mongodb using node js

const update=async ()=>{
let db=await dbConnect()

let result=await db.updateOne({"name":"Nord"},{$set:{"price":150}})

if(result.acknowledged){
    console.log("data successfully updated")
}

}

update()