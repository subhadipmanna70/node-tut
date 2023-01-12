const express=require("express");;
const app=express();

const EventEmmiter=require("events");

const event= new EventEmmiter();
let count=0;
event.on("count_api",()=>{
    count++;
    console.log("event called "+count+" times")
});

app.get("/",(req,resp)=>{

    resp.send("get api called");
    event.emit("count_api");
});

app.post("/",(req,resp)=>{

    resp.send("get api called");
    event.emit("count_api");
});

app.delete("/",(req,resp)=>{

    resp.send("get api called");
    event.emit("count_api");
});
app.listen(8000);