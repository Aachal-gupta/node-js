const http = require ('http');
http.createServer((req,resp)=> {
    resp.write("<h1>hi I am Aachal from Pune </h1>");
    resp.end();

}).listen(450);         // go on browser and type localhost:450 and when ever you change anything you should have to  
                        //  on terminal start the server  by => just type foldername and file name like node ./node_demo.js