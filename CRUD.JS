// *****<1> FILE CREATE *****
// const fs = require('fs');  // fs stands for file system 
// fs.writeFileSync('demo.js', "this file create by code."); // (file name , data)


// ******<2> READ  file content/data  ********
// const fs = require('fs');
// const path = require('path');
// // Construct the full path to Hello1.txt
// const filePath = path.join(__dirname, 'Files', 'Hello1.txt');

// fs.readFile(filePath, 'utf8', (err, data) => {   // utf8 is for removing buffer 
//     if (err) {
//         console.error('Error reading the file:', err);
//     } else {
//         console.log('File contents:', data);
//     }
// });

//*******<3>READ/get  FILE NAME ******* */
// const fs = require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'Files'); // two underscore dirname, foldername
// console.warn(dirPath);
// fs.readdir(dirPath,(error,fileVar)=>{
//         fileVar.forEach((fileItems) => {
//            console.log("file name is :-",fileItems)  // by foreach loop it show array 
//         });
    
// }); // it act as a web server so we can read or get files from node folder only not from c drive or other outside  folder 
    
//*******<4>APPEND content in file  ********* */
// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname, 'Files', 'Hello1.txt');
// fs.appendFile(filePath, " and in file data is appended. ",(error)=>{
//     if(!error){
//         console.log("file is updated .");
//     }
// });

//******* <5> RENAME THE FILE ********* */

// const fs = require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'Files'); // it show path of node folder
// const filePath = path.join(__dirname, 'Files', 'Hello1.txt'); // it show path of file Hello1.txt
// fs.rename(filePath,dirPath+'/fruit.txt',(err)=>{
//     if(!err){
//         console.log('file name is updated .');
//     }
// })

//****** <6> DELET FILE ******* */

const fs = require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'Files'); // it show path of node folder
const x= fs.unlinkSync(`${dirPath}/Hello0.txt`);
if(x){
    console.log('file is delet');
}

