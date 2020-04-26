const http=require('http');
const host='http://localhost'
const port=2000;
//create server
http.createServer((req,res)=>{
    res.write('hello world!');
    res.end();
}).listen(port,()=>{
    console.log(`Server running at ${host}:${port}`);
})