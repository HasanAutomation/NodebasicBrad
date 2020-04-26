const url=require('url');

const myUrl=new URL('http://hasanacademy.com:2000/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);

//Host
console.log(myUrl.host);

//hostname:doesn't include port 
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname)

//serialized query
console.log(myUrl.search)

//params object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('abc',123);
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));
