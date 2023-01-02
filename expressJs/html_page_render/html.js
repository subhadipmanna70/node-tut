const express = require('express');
const app= express();
app.set("view engine","ejs");


             // direct html render

// app.get("",(req,resp)=>{
// resp.send(`<h1>welcome, Its Homepage</h1><a href="/aboutus">go to about us page</a>`);

// });

// app.get("/aboutus",(req,resp)=>{
//     resp.send(`<div><input type="text" placeholder="Username" value="${req.query.name}"/></div>
//            <button>click me</button>
//     `);
 
//  });
    
//  app.get("/help",(req,resp)=>{
//     resp.send([
//         {
//         name:'subhadip',
//         age:23
//         },
//         {
//             name:'roni',
//             age:22
//             }

// ]);
    
//  });





                            // render from html folder with static method
        
// const path = require("path");

// const dirPath= path.join(__dirname,"html_pages");

// console.log(dirPath);

// app.use(express.static(dirPath));

//  app.listen(7000);

                              // using get method to render html pages from folder

const path = require("path");

const dirPath= path.join(__dirname,"html_pages");

console.log(dirPath);

app.get("",((req,resp)=>{

    resp.sendFile(`${dirPath}/index.html`);
}));

app.get("/help",((req,resp)=>{

    resp.sendFile(`${dirPath}/help.html`);
}));

app.get("/about",((req,resp)=>{

    resp.sendFile(`${dirPath}/about.html`);
}));

              // using ejs template for dynamic page
                // the .ejs pages have to be in views its by default set


                app.get("/profile",((req,resp)=>{
                    const user={
                        name:"subhadip manna",
                        age: 22,
                        city:"howrah",
                        skills:['c','java','c++','python']
                    }
                
                resp.render('profile',{user});
                }));




// invalid routing
app.get("*",((req,resp)=>{

    resp.sendFile(`${dirPath}/404.html`);
}))


  

 app.listen(7000);