//Basics

// var userInfo = {
//     name: "barath",
//     initial: "R",
//     boolean:true,
//     num1:22,
// };
// console.log(userInfo.initial);
// console.log(userInfo["initial"]);
// userInfo.boolean = false;
// console.table(userInfo);

//Methods and Objects

 var userInfo = {
     name: "barath",
     initial: "R",
     role:"stud",
     boolean:true,
     num1:22,
     courseList: [],
     buyCourse: function(cName){
         this.courseList.push(cName);
     },
     getCourseCount: function(){
         return `${this.name} is enrolled in ${this.courseList.length}`;
     },
     getInfo: function(){
         return `Hi ${this.name} your initial is ${this.initial} and you are a ${this.role }.`
     }
 };
userInfo.buyCourse("c++");
userInfo.buyCourse("python");
 console.log(userInfo.getCourseCount());
 console.log(userInfo.getInfo());
 console.log(userInfo);