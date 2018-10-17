const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');


var app = express();

app.use(cookieParser());
app.use(session({secret : 'secretKey' , saveUninitialized : true , resave : true , cookie : {maxAge : 6000}}));

app.get('/' , (req,res) =>{
  if(req.session.visitCount){
    req.session.visitCount++;
    res.send(`Count : ${req.session.visitCount}`);
  }
  else {
    req.session.visitCount = 1;
    res.send("Refresh Page");
  }
});


app.listen(3000);
