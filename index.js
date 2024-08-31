// console.log(process.argv); // it is argument vector show our files pahts

//*** <1>   create server ****
// const http = require ('http');
// const data=require('./api');
// http.createServer((req,resp)=> {
//     resp.writeHead(201,{'content-type': 'application\json'});
//     resp.write(JSON.stringify(data));
//     // resp.write("hello it is an  am Aachal Gupta. ");
//     resp.end();

// }).listen(4000);         // go on browser and type localhost:4000 and when ever you change anything you should have to  
                        //  on terminal start the server  by => just type foldername and file name like node ./node_demo.js


// *** <2> create file by file-system(fs)

// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2],input[3]); 
// go on cmd and write  node .\index.js example.txt "this is file created on cmd "
// it will create file example.txt and in the file data will be containe .

// OR  ****** <2.1> create file by this way *********

// const fs = require('fs');  // fs stands for file system 
// fs.writeFileSync('demo.js', "this file create by code."); // (file name , data)
  
//<2.3>********* file created by given path by code ********** */
// const fs = require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'Files'); // two underscore dirname, foldername
// console.warn(dirPath);
// for(i=0; i<5; i++)
// {
//     fs.writeFileSync(dirPath+"/Hello"+i+".txt", "five file is created by this loop");
// }

//<3> ***** for reading files/ get files only in node folder ***** 

// fs.readdir(dirPath,(error,fileVar)=>{
//     fileVar.forEach((fileItems) => {
//        console.log("file name is :-",fileItems)  // by foreach loop it show array 
//     });

// }); // it act as a web server so we can read or get files from node folder only not from c drive or other outside  folder 

// ******<3> Read file content  ********

// const fs = require('fs');
// const path = require('path');

// // Construct the full path to Hello1.txt
// const filePath = path.join(__dirname, 'Files', 'Hello1.txt');

// // Read the file
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//     } else {
//         console.log('File contents:', data);
//     }
// });
