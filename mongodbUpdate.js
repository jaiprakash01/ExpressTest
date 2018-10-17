
const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp' , (err , db)=>{
  if(err){
    return console.log('not connected to mongodb');
  }

  console.log('connected to mongodb server');

  db.collection('Students').findOneAndUpdate({_id: new ObjectId('5b8ffd9da0d3db20a06cbb2d')},
   {
     $set:{
       phoneNumber : '9871234567',
       emailid: 'aj@gmail.com'
     }
   },
   {
     returnOriginal : false
   }).then((result)=>{
      console.log(result)
    });

  db.close();
});
