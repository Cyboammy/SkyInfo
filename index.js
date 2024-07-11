const fs=require('fs');
const http=require('http');
const requests=require('requests');
const data=fs.readFileSync("index.html","utf-8");

const server=http.createServer((req,res)=>{
        if(req.url=="/"){
            res.end(data);
        }
});

server.listen(8000,"127.0.0.1",()=>{console.log("listening from the port number 8000")});

