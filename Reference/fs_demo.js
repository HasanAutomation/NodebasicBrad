const fs=require('fs');
const path=require('path');

//create folder
fs.mkdir(path.join(__dirname,'/test'),{},err=>{
    if(err)throw err;
    console.log("Folder created...");
})

// create and write to file :writeFile overwrites with the latest content
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world!',err=>{
    if(err)throw err;
    console.log("File written to...");

    //append content in that file
    fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love NodeJS',err=>{
        if(err)throw err;
        console.log("File appended to...");
    })

    //Read file
    fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
        if(err)throw err;
        console.log("This is the content "+ data);
    });


});


//rename file
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloWorld.pdf'),err=>{
    if(err)throw err;
    console.log("File renamed...");
});



