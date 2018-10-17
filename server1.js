var sqr = function (x) {
  var result = x * x ;
  return result;
};

var sqr1 = (x) => {
  var result = x * x ;
  return result;
};

var sqr2 = (x) => x * x;

var sqr3 = x => x * x;

var add = (x,y) => x + y;

//console.log(sqr(9));
//console.log(sqr1(10));
//console.log(sqr2(11));
//console.log(sqr3(12));
//console.log(add(1,2));


var user = {
  name : "vikash",
  sayHi : function() {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

var user1 = {
  name : "ajeet",
  sayHi : () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

var user2 = {
  name : "jp",
  sayHi  () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};

user1.sayHi(1,2,3);
