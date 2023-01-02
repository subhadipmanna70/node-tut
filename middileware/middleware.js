module.exports=(req,resp,next)=>{
    console.log("middileware is running");

    if (!req.query.age){
        resp.send("you are not allowed to enter the site.plzz enter age");
    }
    
   else if (req.query.age<18){
        resp.send("you are under 18");
    }
    else{
        next();
    }
    
}