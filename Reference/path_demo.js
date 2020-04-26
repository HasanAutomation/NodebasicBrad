const path=require('path');

//Base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//extension name
console.log(path.extname(__filename))

//create path object
console.log(path.parse(__filename))

//concatenate path
//../test/index.html -wanna createthis path

console.log(path.join(__dirname,'test','index.html'));