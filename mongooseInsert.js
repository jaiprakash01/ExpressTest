var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({name : String , age : Number , phoneNumber : String} , {collection : 'Students'});

var StudentModel = mongoose.model("Students" ,StudentSchema);

mongoose.connect("mongodb://localhost:27017/Todoapp" , {useNewUrlParser : true});

//StudentModel.findOne({name : "ajit"}, fun1);
var newStudent = new StudentModel({name:"jp" , age : 29 , phoneNumber : "1234567890"});

newStudent.save(fun1);

function fun1(error , data) {
  if(error == null) {
    console.log("Inserted");
  }
  else {
    console.log(error);
  }

  mongoose.disconnect();
}
