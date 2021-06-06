// import userInfo from "./classes.js";
const userInfo = require("./classes.js");

const barath = new userInfo("barath", "jsghgu@gamil.com");
console.log(barath.getInfo());
barath.enrollCourse("C++");
barath.enrollCourse("Java");
var courses = barath.getCount();
courses.forEach((course) => {
  console.log(course);
});
