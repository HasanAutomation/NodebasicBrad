const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/')
    {
        fs.readFile(path.join(__dirname,'static','home.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(content);
        })
        
    }
    else if(req.url==='/about')
    {
        fs.readFile(path.join(__dirname,'static','about.html'),(err,content)=>{
            if(err)throw err;
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(content);
        })
        
    }
    else if('/api/users')
    {
        const users=[
            {name:"Hasan",age:22},
            {name:"Madhu",age:23}
        ];
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(users));
    }
})

const port=process.env.PORT || 2000;

server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})