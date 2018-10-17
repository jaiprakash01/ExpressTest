const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');


var app = express();

app.use(cookieParser());
app.use(session({secret : 'secretKey' , saveUninitialized : true , resave : true , cookie : {maxAge : 100000}}));

app.get('/' , (req,res) =>{
  req.session.visitCount = "ajeet";
  res.send(`value : ${req.session.visitCount}`);
//  if(req.session.visitCount){
//    req.session.visitCount++;
//    res.send(`Count : ${req.session.visitCount}`);
//  }
//  else {
//    req.session.visitCount = 1;
//    res.send("Refresh Page");
//  }
});

app.get('/about' , (req,res)=>{
  var visitCount = 0;
  //res.clearCookie("MyCookie");
  //res.send("Hello from about.");
  //req.session.visitCount ++;
  //req.session.destroy();
  res.send(`value : ${req.session.visitCount}`);
});



app.listen(3000);
