const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    //build file path

    const filePath = path.join(__dirname, 'static', req.url === '/' ? "home.html" : req.url);

    //extension name
    let extname = path.extname(filePath);

    //content type
    let contentType = 'text/html';

    //check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';

            break;
        case '.css':
            contentType = 'text/css';

            break;
        case '.json':
            contentType = 'application/json';

            break;
        case '.png':
            contentType = 'image/png';

            break;
        case '.jpg':
            contentType = 'image/jpg';

            break;
    }

    //read the file
    fs.readFile(filePath,(err,data)=>{
        if(err)
        {
            if(err.code='ENOENT')
            {
                //file not found
                fs.readFile(path.join(__dirname,'static','404.html'),(err,content)=>{
                    res.writeHead(200,{'Content-type':'text/html'});
                    res.end(content,'utf8');
                })
            }
            else{
                res.writeHead(500);
                res.end(`Server Error:${err.code}`);
            }
        }
        else{
            res.writeHead(200,{'Content-type':contentType});
            res.end(data,"utf8");
        }
    })



});

const port=process.env.PORT || 2000;
server.listen(port, () => {
    console.log('server running');
})