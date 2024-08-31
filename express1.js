const express = require("express");
const app = express();

app.get("", (req, resp) => {
  console.log("data sent by -> ", req.query.name); // write on browser url localhost:2000/?name=aachal
  resp.send(
    " WELCOME " +
      req.query.name +
      '<br><a href="/about">Go to the about page</a> '
  );
});

app.get("/about", (req, resp) => {
  resp.send(
    "<h1> Hello , this is about  page of express.</h1>" +
      '<br><a href="/help">Go to the help page</a> '
  ); // write on browser url localhost:2000
});

// Render HTML and JSON

app.get("/help", (req, resp) => {
  // type on browser url localhost:2000/help?name=abhay
  resp.send(
    ` <input type="text" placeholder="Enter your name"  value="${req.query.name}" />   // note: there is backtick 
    <button>submit</button> 
    <a href="/">Go to the index page</a> `
  );
});
app.listen(2000);
