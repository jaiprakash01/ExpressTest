//const mongodb = require('mongodb').MongoClient;
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp' , (err , db)=>{
  if(err){
    return console.log('not connected to mongodb');
  }

  console.log('connected to mongodb server');

/*  **************************find with object ***************************************/
    //db.collection('Students').find({_id: new ObjectId('5b8ffd5f4926f5224cd824f4')}).toArray().then((result)=>{
    //  console.log(JSON.stringify(result , undefined , 2))
    //});

/*  ******************************** working like query ***************************************/

    db.collection('Students').find({name: /vicky/}).toArray().then((result)=>{
      console.log(JSON.stringify(result , undefined , 2))
    });

  db.close();
});
