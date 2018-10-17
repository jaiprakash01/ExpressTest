var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({name : String , age : Number , phoneNumber : String} , {collection : 'Students'});

var StudentModel = mongoose.model("Students" ,StudentSchema);

mongoose.connect("mongodb://localhost:27017/Todoapp" , {useNewUrlParser : true});

StudentModel.findOne({name : "jp"}, fun1);

function fun1(error , data) {
  if(error == null) {
    data.age = 33;
    data.phoneNumber = "9876543210";
    data.save(fun2);
    function fun2(error2 , data) {
      if(error2 == null){
        console.log("Updated");
      }
      else 
      {
        console.log(error2);
      }
      mongoose.disconnect();
    }
  }
  else {
    console.log(error);
  }
}
