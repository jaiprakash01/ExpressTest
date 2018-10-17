const express = require('express');

const cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/' , (req,res) =>{
  res.cookie("MyCookie" , "My first cookie");
  res.send("Hello from state management.");
});

app.get('/about' , (req,res)=>{
  res.clearCookie("MyCookie");
  res.send("Hello from about.");
});


app.listen(3000);
