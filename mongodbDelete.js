
const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp' , (err , db)=>{
  if(err){
    return console.log('not connected to mongodb');
  }

  console.log('connected to mongodb server');

  //deleteOne
  //deleteMany
  //findOneAndDelete

  //db.collection('Students').deleteOne({name: 'ajit'}).then((result)=>{
  //    console.log(result)
  //  });

  //db.collection('Students').deleteMany({name: 'ajit'}).then((result)=>{
  //    console.log(result)
  //  });

  db.collection('Students').findOneAndDelete({name: 'ajit'}).then((result)=>{
      console.log(result)
    });

  db.close();
});
