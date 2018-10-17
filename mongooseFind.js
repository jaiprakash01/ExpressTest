var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({name : String , age : Number , phoneNumber : String} , {collection : 'Students'});

var StudentModel = mongoose.model("Students" ,StudentSchema);

mongoose.connect("mongodb://localhost:27017/Todoapp" , {useNewUrlParser : true});

StudentModel.findOne({name : "ajit"}, fun1);

function fun1(error , data) {
  if(error == null) {
    //for (var i = 0; i < data.length; i++) {
      console.log(data.name);
      console.log(data.age);
      console.log(data.phoneNumber);
      console.log("---------------");
    //}
  }
  else {
    console.log(error);
  }

  mongoose.disconnect();
}
