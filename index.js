const colors=require('colors');
console.log("hello".green);
const http = require('http');

// const dataControl=(req,resp)=>
// {
//     resp.write("<h1>i am joddd.</h1>");
//     resp.end();

// }


http.createServer((req,resp)=>
{
    resp.write("<h1>i am joddd.</h1>");
    resp.end();

}).listen(4500);