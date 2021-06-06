var newUser = function (firstname, initial, courseCount) {
  this.firstname = firstname;
  this.initial = initial;
  this.courseCount = courseCount;
  this.getCourseCount = () => {
    console.log(`${this.firstname} has tot of ${this.courseCount}`);
  };
};

newUser.prototype.getFirstName = function () {
  console.log(`${this.initial} Your firstname is ${this.firstname}`);
};
var barath = new newUser("barath", "R", 3);
console.log(barath);
// barath.getCourseCount();
// barath.getFirstName();
// console.log(barath);

// console.log(barath);

var sam = new newUser("sam", "l", 8);
// console.log(sam);

if (barath.hasOwnProperty("firstname")) {
  barath.getFirstName();
}
