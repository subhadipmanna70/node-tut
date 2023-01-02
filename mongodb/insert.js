const dbConnect=require("./mongodb")

const insert=async ()=>{
let db= await dbConnect()

let result= await db.insertMany(
    [
    {"name":"A20","brand":"samsung","price":150},
    {"name":"poco x3 pro","brand":"poco","price":140},
    {"name":"moto g40","brand":"motorola","price":170}
    ]
    )
//console.log(result)


if(result.acknowledged){
    console.warn("data inserted succesfully")
}

}

insert()
