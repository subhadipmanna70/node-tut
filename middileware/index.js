const express=require('express');
const app=express();
app.set('view engine','ejs');
const reqFilter=require('./middleware')
const route=express.Router();          //creating a instance of route to create group route

route.use(reqFilter);    // passing the middleware only for route 


// app.use(reqFilter);           //application level middleware-> its works on full application

app.get('/',((req,resp)=>{          //route level middleware-> in this type middleware works only those route in which we pass it as reqFilter

    resp.send("this is the homepage");
}))


app.get('/user',((req,resp)=>{

    resp.send("this is the Userpage");
}))

route.get('/contact',((req,resp)=>{

    resp.send("this is the Contact page");
}))

route.get('/profile',((req,resp)=>{
    const user={
        name:"subhadip manna",
        age: req.query.age,
        city:"howrah",
        skills:['c','java','c++','python']
    }

    resp.render('profile',{user});                             // in ejs template it automatic take views folder path so dont need to give the path of folder only pass the file
}))
app.use('/',route);                    // set it to use route

app.listen(8000);

