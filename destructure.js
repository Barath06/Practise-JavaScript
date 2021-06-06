// const user = ["barath", 4, "student"];
// var role = user[2];
// var name = user[0];
// var count = user[1];

// var [name, courseCount, role] = user;

// console.log(role);

const myUser = {
  name: "barath",
  count: 3,
  role: "student",
};

console.log(myUser.name);
//names should be same//
const { name, count, role } = myUser;
console.log(count);
