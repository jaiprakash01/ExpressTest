const mongodb = require('mongodb').MongoClient;

mongodb.connect('mongodb://localhost:27017/Todoapp' , (err , db)=>{
  if(err){
    return console.log('not connected to mongodb');
  }

  console.log('connected to mongodb server');

  //db.collection('Students').insertOne({
  //  name : 'vicky mahala',
  //  email : 'v@gmail.com',
  //  age : 25
//  } , (err , result)=>{
  //  if(err){
  //   return  console.log('student not added to database');
  //  }

    db.collection('Students').insertOne({
      name : 'ajit',
      phoneNumber : '1234567884',
      age : 25
    } , (err , result)=>{
      if(err){
       return  console.log('student not added to database');
      }

    console.log(result.ops);
  })

  db.close();
})
