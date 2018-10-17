const express = require('express');

const hbs = require('hbs');

var port = process.env.PORT || 3000;

var app = express();

app.set('view engine' , 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partialViews');

//app.get('/' , (req,res)=> {
//   res.send('<h1>Hello from Express Js</h1>');
//});
app.get('/' , (req,res)=> {
   //res.send({
  //   name : 'vikash',
  //   emailids : ['vikash@gmail.com' , 'suresh@gamil.com']
   //});
   res.render('home.hbs', {
     currentYear :  new Date().getFullYear()
   });
});

app.get('/About' , (req, res) => {
  //res.send('about page');
  res.render('about.hbs' , {
    pageName : 'about'
  });
});

app.listen(port);
