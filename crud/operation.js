const fs = require("fs");
const path = require("path");

const dirPath=path.join(__dirname,"new");
const filePath=path.join(`${dirPath}/app.txt`);

// fs.writeFileSync(filePath,"my name is roni");

                                  // read content of a file

// fs.readFile(filePath,'utf8',(err,items)=>{
//     console.log(items);
// })


                                  // update content of a file
// fs.appendFile(filePath,". i am jodd.",(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }
// }) 

                                 //Rename a file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)
//     {
//       console.log("file name updated");

//     }
// });


                                // delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);