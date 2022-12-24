const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname,"files");

console.warn(dirPath);

                                           // create files

// for(i=0;i<5;i++){

//     // fs.unlinkSync(dirPath+"/app"+i+".txt");
//     fs.writeFileSync(dirPath+"/app"+i+".txt","i am jodd");
// }

                                             // read files
fs.readdir(dirPath,(err,files)=>{
    files.forEach((element) => {
         console.log(element);    
    });
});