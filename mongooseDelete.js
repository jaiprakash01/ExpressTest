var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({name : String , age : Number , phoneNumber : String} , {collection : 'Students'});

var StudentModel = mongoose.model("Students" ,StudentSchema);

mongoose.connect("mongodb://localhost:27017/Todoapp" , {useNewUrlParser : true});

StudentModel.deleteOne({name : "jp"}, fun1);

function fun1(error , data) {
  if(error == null) {
      console.log("Deleted");
  }
  else {
    console.log(error);
  }
  mongoose.disconnect();
}
